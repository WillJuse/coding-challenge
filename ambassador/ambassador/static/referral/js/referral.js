(function(){
  'use strict';

  angular.module('referral.demo', ['ngRoute'])
    .controller('ReferralController', ['$scope', '$http', '$location', ReferralController]);

  function ReferralController($scope, $http, $location) {

    $scope.data = [];
    $http.get('/referral/referrals/').then(function(response){
      $scope.data = response.data;
    });

    $scope.add = function(referral, new_referral) {
      var ref = {
        name: new_referral
      };

      if ($scope.data.filter(x => x.name === ref.name).length === 0) {
        $http.post('/referral/referrals/', ref)
          .then(function(response) {
            $scope.data.push(response.data);
            $location.path('/landing').search({'link' : ref.name});
          },
          function(response){
            alert('failed to create referral...Will probably did something wrong ' + response.data);
          });
      }
      else {
        alert('We already have a referral for ' + ref.name + ' click it if you would like to increase the number of referrals');
      }

    };

    $scope.updateReferrals = function(ref) {
      // TODO this assigning to scope is dumb.
      $scope.ref = ref;
      var url = '/referral/referrals/' + $scope.ref.id + '/';
      $scope.ref.clicks++;
      $http.put(url, $scope.ref);
    };

    $scope.deleteReferrals = function(index) {
      var referralToDelete = $scope.data[index];
      var url = '/referral/referrals/' + referralToDelete.id + '/';
      $http.delete(url)
        .then(function() {
          $scope.data.splice(index, 1);
        },
        function() {
          alert('failed to delete');
        });
    };

  }

}());

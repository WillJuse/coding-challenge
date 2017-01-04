(function(){
  'use strict';

  angular.module('referral.demo', ['ngRoute'])
    .controller('ReferralController', ['$scope', '$http', ReferralController]);

  function ReferralController($scope, $http) {

    $scope.data = [];
    $http.get('/referral/referrals/').then(function(response){
      $scope.data = response.data;
    });

    $scope.add = function(referral, new_referral) {
      var ref = {
        name: new_referral
      };
      $http.post('/referral/referrals/', ref)
        .then(function(response){
          $scope.data.push(response.data);
        },
        function(){
          alert('failed to create referral...Will probably did something wrong');
        });

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

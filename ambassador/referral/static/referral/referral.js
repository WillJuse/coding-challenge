(function(){
  'use strict';

  angular.module('referral.demo', [])
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

  }

}());

(function(){
  'use strict';

  angular.module('referral.demo')
    .controller('ReferralDetailsController', ['$scope', '$location', '$http', ReferralDetailsController]);

  function ReferralDetailsController($scope, $location, $http){
    $scope.test = $location.search()['link'];
  }
})();

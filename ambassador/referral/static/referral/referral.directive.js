(function(){
  'use strict'

  angular.module('referral.demo')//remember no arguements here because it is already created
    .directive('referralElement', ReferralElement);

  function ReferralElement() {
    return {
      templateUrl: "/static/referral/referral.html",
      restrict: 'E', // This restricts it to an element, not an attribute or other.
      controller: ['$scope', '$http', function($scope, $http) {
        var url = '/referral/referrals/' + $scope.ref.id + '/';

        $scope.update = function() {
          $scope.ref.clicks++;
          $http.put(url, $scope.ref);
        };
      }]
    };
  }

})();

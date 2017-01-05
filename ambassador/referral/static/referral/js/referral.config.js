(function(){
  'use strict';

  angular.module('referral.demo')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$http', run]);

    function config($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'static/referral/templates/referralTable.html',
          controller: 'ReferralController',
        })
        .when('/landing', {
          templateUrl: 'static/referral/templates/referralDetails.html',
          controller: 'ReferralDetailsController'
        })
        .otherwise('/');

        $locationProvider.html5Mode(true);

    }

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    };
})();

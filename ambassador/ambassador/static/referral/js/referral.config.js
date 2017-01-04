(function(){
  'use strict';

  angular.module('referral.demo')
    .config(['$routeProvider', config]);

    function config($routeProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'static/referral/templates/referral.html',
          controller: 'ReferralController',
        })
        .otherwise('/');
    }
})();

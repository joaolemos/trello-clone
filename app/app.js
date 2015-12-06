'use strict';

/**
 * @ngdoc overview
 * @name trelloCloneApp
 * @description
 * # trelloCloneApp
 *
 * Main module of the application.
 */
angular
    .module('trelloCloneApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'trelloCloneApp.common',
      'trelloCloneApp.storyboard'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'storyboard/views/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard',
            requiresLogin: true
          })
          .otherwise({
            redirectTo: '/'
          });
    });

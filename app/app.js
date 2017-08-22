'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'autosavingNotes'
])
    .constant('_', window._)
    // use in views, ng-repeat="x in _.range(3)"
    .run(function ($rootScope) {
        $rootScope._ = window._;
    });

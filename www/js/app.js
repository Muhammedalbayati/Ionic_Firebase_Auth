// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'firebase'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home/login');

    $stateProvider

        .state('home', {
            abstract: true,
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        //        .state('home.logo', {
        //            url: '/logo',
        //            views: {
        //                'logo': {
        //                    templateUrl: 'templates/logo.html'
        //                }
        //            }
        //        })

    .state('home.login', {
            url: '/login',
            views: {
                'tab-login': {
                    templateUrl: 'templates/login.html'
                }
            }
        })
        .state('home.signup', {
            url: '/signup',
            views: {
                'tab-signup': {
                    templateUrl: 'templates/signup.html'
                }
            }
        })
        .state('home.resetPassword', {
            url: '/resetPassword',
            views: {
                'tab-resetPassword': {
                    templateUrl: 'templates/resetPassword.html'
                }
            }
        })


    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'loginSignupCtrl as vm'
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })

    .state('app.browse', {
            url: '/browse',
            views: {
                'menuContent': {
                    templateUrl: 'templates/browse.html'
                }
            }
        })
        .state('app.settings', {
            url: '/settings',
            views: {
                'menuContent': {
                    templateUrl: 'templates/settings.html'
                }
            }
        })

    .state('app.changeEmail', {
        url: '/changeEmail',
        views: {
            'menuContent': {
                templateUrl: 'templates/changeEmail.html'
            }
        }
    })

    .state('app.changePassword', {
        url: '/changePassword',
        views: {
            'menuContent': {
                templateUrl: 'templates/changePassword.html'
            }
        }
    })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    });

});

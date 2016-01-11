//ng-controller
(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginSignupCtrl', ['$state', 'userService', loginSignupCtrl]);

    function loginSignupCtrl($state, userService) {
        var vm = this;

        vm.user = {
            email: '',
            password: ''
        };

        vm.signup = function (user) {
            userService.signup(user);
        };

        vm.login = function (user) {
            userService.login(user);
        };

        vm.logout = function () {
            userService.logout();
            $state.go('home.login');
        };


        vm.resetPassword = function (email) {
            userService.resetPassword(email);
        };

    };

}());

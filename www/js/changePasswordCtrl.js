//ng-controller
(function () {
    'use strict';

    angular
        .module('app')
        .controller('changePasswordCtrl', ['userService', changePasswordCtrl])

    function changePasswordCtrl(userService) {
        var vm = this;

        vm.user = {
            email: '',
            oldPassword: '',
            newPassword: ''
        };

        vm.changePassword = function (user) {
            userService.changePassword(user);
        };

    };

}());

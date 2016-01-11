//ng-controller
(function () {
    'use strict';

    angular
        .module('app')
        .controller('changeEmailCtrl', ['userService', changeEmailCtrl])

    function changeEmailCtrl(userService) {
        var vm = this;
        vm.user = {
            oldEmail: '',
            newEmail: '',
            password: ''
        };

        vm.changeEmail = function (user) {
            userService.changeEmail(user);
        };

    };

}());

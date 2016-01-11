//ng-controller
(function () {
    'use strict';

    angular
        .module('app')
        .controller('profileCtrl', ['profileService', '$scope', profileCtrl]);

    function profileCtrl($scope, profileService) {
        var vm = this;
        vm.profiles = profileService.getAllProfiles;
        //        vm.profiles = profileService.getAllProfiles;

    };

}());

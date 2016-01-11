//ng-controller
(function () {
    'use strict';

    angular
        .module('app')
        .controller('dataCtrl', ['dataService', dataCtrl])

    function dataCtrl(dataService) {
        var vm = this;

        vm.getByEmail = function (email) {
            dataService.getByEmail(email);
        };


    };

}());

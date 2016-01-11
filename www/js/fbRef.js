(function () {
    'use strict';

    angular
        .module('app')
        .factory('fbRef', [fbRef]);

    function fbRef($firebase) {
        var fbRef = new Firebase('https://taxiapp1.firebaseio.com/');
        return fbRef;
    };
}());

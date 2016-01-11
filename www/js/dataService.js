//http dataService
(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', [dataService]);

    function dataService() {
        return {
            getByEmail: getByEmail
        };

        function getByEmail(email) {

            var fbRef = new Firebase("https://taxiapp1.firebaseio.com/profiles/");

            //            fbRef.orderByChild("email").equalTo(email).on("value", function (snapshot) {
            //                console.log(snapshot.key());
            //            });

            fbRef.child('email/' + emailToKey(email)).once('value', function (snap) {
                console.log(snap.val());
            });

            /**
             * Firebase keys cannot have a period (.) in them, so this converts the emails to valid keys
             */
            function emailToKey(emailAddress) {
                return emailAddress.replace('.', ',');
            }
            //muhammed.albayati@gmail.com
        };
    };
}());

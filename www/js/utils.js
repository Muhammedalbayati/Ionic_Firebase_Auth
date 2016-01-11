angular.module('app')
    .factory('Utils', function ($ionicLoading, $ionicPopup) {

        var Utils = {
            show: show,
            hide: hide,
            alertshow: alertshow,
            errMessage: errMessage
        };

        function show() {
            $ionicLoading.show({
                animation: 'fade-in',
                showBackdrop: false,
                maxWidth: 200,
                showDelay: 500,
                template: '<ion-spinner class="spinner-energized"></ion-spinner>'
            });
        };

        function hide() {
            $ionicLoading.hide();
        };


        function alertshow(tit, msg) {
            var alertPopup = $ionicPopup.alert({
                title: tit,
                template: msg
            });
            alertPopup.then(function (res) {
                //console.log('Registrado correctamente.');
            });
        };

        function errMessage(err) {

            var msg = "Unknown Error...";

            if (err && err.code) {
                switch (err.code) {
                case "EMAIL_TAKEN":
                    msg = "This Email has been taken.";
                    break;
                case "INVALID_EMAIL":
                    msg = "Invalid Email.";
                    break;
                case "NETWORK_ERROR":
                    msg = "Network Error.";
                    break;
                case "INVALID_PASSWORD":
                    msg = "Invalid Password.";
                    break;
                case "INVALID_USER":
                    msg = "Invalid User.";
                    break;
                }
            }
            Utils.alertshow("Error", msg);
        };
        return Utils;
    });

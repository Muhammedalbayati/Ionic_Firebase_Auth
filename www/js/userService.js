//http dataService
(function () {
    'use strict';

    angular
        .module('app')
        .factory('userService', ['$rootScope', '$firebaseArray', 'fbRef', '$state', '$ionicPopup', userService]);

    function userService($rootScope, $firebaseArray, fbRef, $state, $ionicPopup) {
        //The reason I put this logic here, is to run loadCurrentUser.
        if (loadCurrentUser()) {
            $rootScope.currentUser = loadCurrentUser();
            $state.go('app.search');
        } else {
            $state.go('home.login');
        }

        return {
            login: login,
            signup: signup,
            logout: logout,
            createProfile: createProfile,
            loadCurrentUser: loadCurrentUser,
            changeEmail: changeEmail,
            changePassword: changePassword,
            resetPassword: resetPassword
        };

        function showAlert(title, msg) {
            $ionicPopup.alert({
                title: title,
                template: msg
            });
        };

        function login(user) {
            fbRef.authWithPassword({
                email: user.email,
                password: user.password
            }, function (error, authData) {
                if (error) {
                    showAlert("Error", error);
                } else {
                    $rootScope.currentUser = user;
                    $state.go('app.search');
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        };

        function signup(user) {
            fbRef.createUser({
                email: user.email,
                password: user.password
            }, function (error, authData) {
                if (error) {
                    showAlert("Error", error);
                } else {
                    login(user);
                    createProfile(user, authData.uid);
                    // console.log("Successfully created user account with uid:", authData.uid);
                }
            });
        };


        function createProfile(user, uid) {
            var profile = {
                id: uid,
                email: user.email,
                status: 'offline',
                gravatar: '', //authData.password.profileImageURL,
                registered_in: Date()
            };
            var profilesRef = fbRef.child("profiles");
            profilesRef.push(profile);
        };

        function logout(user) {
            fbRef.unauth();
            $rootScope.currentUser = '';
        };

        //muhammed.albayati@gmail.com
        //msh2662006
        function loadCurrentUser() {
            return fbRef.getAuth();
        };


        function changeEmail(user) {

            fbRef.changeEmail({
                oldEmail: user.oldEmail,
                newEmail: user.newEmail,
                password: user.password
            }, function (error) {
                if (error === null) {
                    showAlert('Changed Submitted', "Email changed successfully")
                        //console.log("Email changed successfully");
                } else {
                    showAlert('Error', "Error changing email: " + error)
                        //console.log("Error changing email:", error);
                }
            });

        };



        function changePassword(user) {

            fbRef.changePassword({
                email: user.email,
                oldPassword: user.oldPassword,
                newPassword: user.newPassword
            }, function (error) {
                if (error === null) {
                    showAlert('Changed Submitted', "Password changed successfully")
                        // console.log("Password changed successfully");
                } else {
                    showAlert('Error', "Error changing password :" + error)
                        //console.log("Error changing password:", error);
                }
            });
        };



        function resetPassword(email) {
            fbRef.resetPassword({
                email: email
            }, function (error) {
                if (error === null) {
                    showAlert('Password reset', "Password reset email sent successfully")
                        //console.log("Password reset email sent successfully");
                } else {
                    showAlert('Error reset password', "Error sending password reset email :" + error)
                        //console.log("Error sending password reset email:", error);
                }
            });
        };



    };


}());

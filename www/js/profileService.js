//(function () {
//    'use strict';
//
//    angular
//        .module('app')
//        .factory('profileService', ['$firebaseArray', profileService]);
//
//    function profileService($firebaseArray) {
//
//        var profileRef = new Firebase('https://taxiapp1.firebaseio.com/profiles');
//        return $firebaseArray(profileRef);
//    };
//}());


(function () {
    'use strict';
    angular
        .module('app')
        .factory('profileService', ['$firebaseArray',
  function ($firebaseArray) {
                var profilesRef = new Firebase('https://taxiapp1.firebaseio.com/profiles');
                return $firebaseArray(profilesRef);
  }
]);

}());

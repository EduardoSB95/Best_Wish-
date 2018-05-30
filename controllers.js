// controller.js
var app = angular.module('App');
app.controller('FirstController', ['$scope', function($scope) {}]);

app.controller('SignUpController', [
  '$scope',
  '$location',
  '$firebaseAuth',
  function($scope, $location, $firebaseAuth) {
    $scope.signUpWithFacebook = function(service) {
      $firebaseAuth().$signInWithPopup(service);
    };
  }
]);
app.controller('LoginController', [
  '$scope',
  '$location',
  function($scope, $location) {}
]);

app.controller('AuthCtrl', [
  '$scope',
  '$location',
  '$firebaseAuth',
  function($scope, $location, $firebaseAuth) {
    $firebaseAuth().$onAuthStateChanged(function(user) {
      console.log(user);
    });
  }
]);

// Added code for contact
app.controller('ContactController', [
  '$scope',
  '$location',
  function($scope, $location) {}
]);

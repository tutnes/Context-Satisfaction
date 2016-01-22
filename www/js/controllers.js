
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('HappyRate', function($scope) {
  
  $scope.checkCalendar = function (){
	  var startDate = new Date(2016,0,22,00,00,0,0,0); // beware: month 0 = january, 11 = december
	  var endDate = new Date(2016,0,22,23,59,0,0,0);
	  var title = "";
	  var eventLocation = "";
	  var notes = "";
	  var success = function(message) { alert("Success: " + JSON.stringify(message)); };
	  var error = function(message) { alert("Error: " + message); };

  	alert(window.plugins.calendar.findEvent(title,eventLocation,notes,startDate,endDate,success,error));
  };

  $scope.checkFile = function (){
  	alert(window.plugins.file.getFreeDiskSpace());
  };

  $scope.saveData = function(v) {
  	
  	
  	navigator.geolocation.getCurrentPosition(
      function(position) {
          window.localStorage.setItem("data", position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
          window.localStorage.setItem("data", 'Error getting location');
      });
  	window.localStorage.setItem("data",'Score: ' + v + ' Location: ' + window.localStorage.getItem("data"));
  //console.log(temp, v);
  };

  $scope.loadData = function() {
  	alert(window.localStorage.getItem("data"));
  };
  
})




.controller('PlaylistCtrl', function($scope, $stateParams) {
});

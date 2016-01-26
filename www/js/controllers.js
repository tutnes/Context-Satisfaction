angular.module('starter.controllers', [])

.controller('HappyRate', function($scope, $cordovaFile) {
  
  $scope.checkCalendar = function (){
	  
	  var endDate = new Date();
	  var startDate = new Date(endDate.setMinutes(endDate.getMinutes()-1)); // beware: month 0 = january, 11 = december

	  var title = "";
	  var eventLocation = "";
	  var notes = "";
	  var success = function(message) { alert("Success: " + JSON.stringify(message)); };
	  var error = function(message) { alert("Error: " + message); };
	 
  	alert(window.plugins.calendar.findEvent(title,eventLocation,notes,startDate,endDate,success,error));
  };

$scope.getLoc = function () {


}

  $scope.checkFile = function (){
	alert("balle");
  	alert(getFreeDiskSpace());
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
  
  };

  $scope.loadData = function() {
  	alert(window.localStorage.getItem("data"));
  };
  
})

.controller('FileCtrl', function($scope, $cordovaFile) {
  document.addEventListener('deviceready', function () {
    $cordovaFile.getFreeDiskSpace()
      .then(function (success) {
         alert("Balle");
         alert(sucess);
      }, function (error) {
          alert("balle");
      });
    // CHECK
    $cordovaFile.checkDir(cordova.file.dataDirectory, "dir/other_dir")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    $cordovaFile.checkFile(cordova.file.dataDirectory, "some_file.txt")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    // CREATE
    $cordovaFile.createDir(cordova.file.dataDirectory, "new_dir", false)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    $cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    // WRITE
    $cordovaFile.writeFile(cordova.file.dataDirectory, "file.txt", "text", true)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    // READ
    $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
  });
});

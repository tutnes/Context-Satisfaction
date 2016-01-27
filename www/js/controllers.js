angular.module('starter.controllers', [])

.controller('HappyRate', function($scope, $cordovaFile, $cordovaGeolocation) {
  
  $scope.checkCalendar = function (){
	var cal = {
    	endDate: new Date(),
		startDate: new Date(endDate.setMinutes(endDate.getMinutes()-1)) // beware: month 0 = january, 11 = december
		};	
	$cordovaCalendar.findEvent(cal)
	.then(function (result) {
    alert('Success:' + JSON.stringify(result));
  }, function (err) {
    alert('Error:' + JSON.stringify(err));
  });
  };

//A controller for checking available diskspace
  $scope.checkFile = function (){
	$cordovaFile.getFreeDiskSpace()
	.then(function (success) {
		alert(success);
	},function (error) {
		alert(error);
	});
	
  };

//A controller for saving data

  $scope.saveData = function(v) {
  	var posOptions = {timeout: 10000, enableHighAccuracy: false};
  	$cordovaGeolocation
  	.getCurrentPosition(posOptions)
  	.then(function (position){
  		var lat = position.coords.latitude;
  		var lng = position.coords.longitde;
  		alert('Lat: ' + lat + ' Long: ' + lng);
  	},function (err){
  		alert('Error:' + err);
  	})
  	
  
  };

  $scope.loadData = function() {
  	alert(window.localStorage.getItem("data"));
  };

  $scope.testing = function() {
  	$cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
      .then(function (success) {
        console.log(JSON.stringify(success));
      }, function (error) {
        // error
      });
  };

  $scope.testing2 = function() {
  	$cordovaFile.writeExistingFile(cordova.file.dataDirectory, "new_file.txt", "Hei og hopp!")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
  };

  $scope.testing3 = function() {
  	 $cordovaFile.readAsText(cordova.file.dataDirectory, "new_file.txt")
      .then(function (success) {
        alert(JSON.stringify(success));
      }, function (error) {
        // error
      });
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
});


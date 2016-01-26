angular.module('starter.controllers', [])

.controller('HappyRate', function($scope, $cordovaFile, $cordovaGeolocation) {
  
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

  $scope.checkFile = function (){
	$cordovaFile.getFreeDiskSpace()
	.then(function (success) {
		console.log(success);
	},function (error) {
		console.log(error);
	});
	
  };

  $scope.saveData = function(v) {
  	var posOptions = {timeout: 10000, enableHighAccuracy: false};
  	$cordovaGeolocation
  	.getCurrentPosition(posOptions)
  	.then(function (position){
  		var lat = position.coords.latitude;
  		var long = position.coords.longitde;
  		console.log(position);
  	},function (err){
  		console.log('Error:' + err);
  	})
  	
  
  };

  $scope.loadData = function() {
  	alert(window.localStorage.getItem("data"));
  };
  
});


(function(){

'use strict'

angular.module('project1',[])

.controller('asciiValueController', function($scope){
  $scope.data="";
  $scope.totalValue=0;

  $scope.calculateValue=function() {
    var a=stringToValue($scope.data);
    $scope.totalValue=a;
  };

  function stringToValue(string){
    var tempValue=0;
    System.console.log("stringToValue function called");

    for(var i=0; i<string.length; i++){
      tempValue+= string.charCodeAt(i)
    }
    return tempValue;
  }


});

}) ();

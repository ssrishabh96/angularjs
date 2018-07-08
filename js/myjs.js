(function (){

 'use strict';

angular.module('myFirstApp',[])

.controller('myFirstController', function($scope){
  $scope.firstName="Rishabh";
  $scope.lastName="Agrawal";
  $scope.fullName="";
  $scope.nameFunction=function(){

    $scope.fullName=$scope.firstName+" "+$scope.lastName;
  };


});

})();

( function(){

'use strict'

angular.module('secondProject',[])

.controller('project2Controller',dependencyFunction);
dependencyFunction.$inject=['$scope','$filter','$injector'];

function dependencyFunction($scope,$filter,$injector){

$scope.data="Dummy Text";

$scope.upper=function(){
  var upCase=$filter('lowercase');
  $scope.data=upCase($scope.data);
};

console.log($injector.annotate(dependencyFunction));


}

})();

angular.module('jgalindo.controllers', [])

.controller('homeCtrl', function($scope, search, $rootScope, $state){
  $scope.data = {};

  $scope.data = {
    type: true
  }

  $scope.userSearch = function(){
    search.search($scope.data.search).then(function(data){
      $rootScope.results = data;
      $state.go('results');
    })
  }


})
//Contoller for results.html
.controller('resultsCtrl', function($state, $scope, $rootScope){
  //Local data of search results
  $scope.data = $rootScope.results.data.hits;

  $scope.details = function(object){
    $rootScope.singleResult = object;
  }
})
//Controller for details.html
.controller('detailsCtrl', function($state, $scope, $rootScope){
  $scope.data = $rootScope.singleResult;
})

angular.module('jgalindo.services', [])

.service('search', function($http){

  this.search = function(query) {
    return $http({
        method  : 'GET',
        url     : '/search',
        params  : {q: query}
    });
  }

});

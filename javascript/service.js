angular.module('movieDBServices', []).factory('MovieListService', function($http) {
	myServiceObj = {
		name: 'Movie Service',
		createdBy: 'Rocky',
		getList: function(url) {
			return $http.get(url);
		}
	};
	return myServiceObj;
});
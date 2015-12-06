angular.module('movieDBDirectives', [])
	.directive('movieInfoBox', function() {
		return {
			restrict: 'E', //E -> element
			scope: {
				movie: '=info' //'movie' set with 'info' attribute
			},
			templateUrl: 'templates/directives/movie-info-box.html'
		};
	}).
	directive('movieCredits', function() {
		return {
			restrict: 'E', //E -> element
			scope: {
				credits: '=info'
			},
			templateUrl: 'templates/directives/movie-credits.html'
		};
	});
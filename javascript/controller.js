angular.module('movieDBControllers', [])
  .controller('MovieListController', function($scope, MovieListService, myMovieConfig) {
    // set scope with first and last names
    var url = myMovieConfig.moviesEndpoint + '/popular?api_key=' + myMovieConfig.apiKey;
    $scope.movieList = [];
    $scope.title = "Popular";
    $scope.loading = true;

    MovieListService.getList(url).then(
      function(result) {
        $scope.movieList = result.data.results;
        $scope.loading = false;
      }
    ).catch(
      function(error) {
        console.log('error', error)
      });
  })
  .controller('MovieTopRatedController', function($scope, MovieListService, myMovieConfig) {
    // set scope with first and last names
    var url = myMovieConfig.moviesEndpoint + '/top_rated?api_key=' + myMovieConfig.apiKey;
    $scope.movieList = [];
    $scope.title = "Top Rated";
    $scope.loading = true;

    MovieListService.getList(url).then(
      function(result) {
        $scope.movieList = result.data.results;
        $scope.loading = false;
      }
    ).catch(
      function(error) {
        console.log('error', error)
      });
  })
  .controller('MovieNowPlayingController', function($scope, MovieListService, myMovieConfig) {
    // set scope with first and last names
    var url = myMovieConfig.moviesEndpoint + '/now_playing?api_key=' + myMovieConfig.apiKey;
    $scope.movieList = [];
    $scope.title = "Now Playing";
    $scope.loading = true;

    MovieListService.getList(url).then(
      function(result) {
        $scope.movieList = result.data.results;
        $scope.loading = false;
      }
    ).catch(
      function(error) {
        console.log('error', error)
      });
  })
  .controller('MovieUpcomingController', function($scope, MovieListService, myMovieConfig) {
    // set scope with first and last names
    var url = myMovieConfig.moviesEndpoint + '/upcoming?api_key=' + myMovieConfig.apiKey;
    $scope.movieList = [];
    $scope.title = "Upcoming";
    $scope.loading = true;

    MovieListService.getList(url).then(
      function(result) {
        $scope.movieList = result.data.results;
        $scope.loading = false;
      }
    ).catch(
      function(error) {
        console.log('error', error)
      });
  })
  .controller('MovieDetailsController', function($scope, $location, $routeParams, MovieListService, myMovieConfig) {

    $scope.title = 'Movie Details';
    var id = $routeParams.movieId;
    var url = myMovieConfig.moviesEndpoint + '/' + id + '?api_key=' + myMovieConfig.apiKey;

    MovieListService.getList(url).then(
      function(result) {
        $scope.movie = result.data;
      }
    ).catch(
      function(error) {
        $location.path('/error/' + error.data.status_message + '/' + error.status)
      });
  })
  .controller('MovieCreditsController', function($scope, $location, $routeParams, MovieListService, myMovieConfig) {

    var id = $routeParams.movieId;
    var url = myMovieConfig.moviesEndpoint + '/' + id + '/credits' + '?api_key=' + myMovieConfig.apiKey;

    $scope.loading = true;

    $scope.title = 'Movie Credits';
    $scope.creditList = [];

    MovieListService.getList(url).then(
      function(result) {
        $scope.creditList = result.data.results;
        $scope.loading = false;
      }
    ).catch(
      function(error) {
        $location.path('/error/' + error.data.status_message + '/' + error.status)
      });
  });
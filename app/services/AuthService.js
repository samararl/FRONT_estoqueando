app.factory('AuthService', function (appSettings, $http, $q, $timeout, $state, $location, TokenHandler, $rootScope) {
  function login(credentials) {
    var defeered = $q.defer();
    $http.post(appSettings.uri + '/authenticate', {
        'accessData': credentials
      })
      .then(function (response) {
        $rootScope.user = response.data.name;

        TokenHandler.set(response.data.token);
        defeered.resolve();
      })
      .catch(defeered.reject);

    return defeered.promise;
  }

  function isAuthenticated() {
    return TokenHandler.get();
  }

  function authorize(url) {
    $timeout(function () {
      $state.go('app.public.login')
      if (url) {
        $location.search({
          redirect: url
        });
      }
    });
  }

  return {
    login: login,
    isAuthenticated: isAuthenticated,
    authorize: authorize
  }
});
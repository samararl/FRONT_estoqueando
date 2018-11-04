(function () {

  angular.module('app')
    .factory('AuthHttpInterceptor', AuthHttpInterceptor);

  AuthHttpInterceptor.$inject = ['TokenHandler', '$q', '$state'];

  function AuthHttpInterceptor(TokenHandler, $q, $state) {

    function request(config) {
      config.headers = config.headers || {};

      if (TokenHandler.get()) {
        config.headers['Authorization'] = 'Bearer ' + TokenHandler.get();
      }
      return config;
    }

    function response(response) {
      response.headers = response.headers || {};
      response.headers['Referrer-Policy'] = 'same-origin';
      response.headers['Feature-Policy'] = 'self';
      response.headers['X-Frame-Options'] = 'DENY';
      response.headers['X-XSS-Protection'] = '1; mode=block';
      response.headers['X-Content-Type-Options'] = 'nosniff';
      response.headers['Strict-Transport-Security'] = 'max-age=63072000; includeSubdomains; preload';

      if (TokenHandler.get()) {
        response.headers['Authorization'] = 'Bearer ' + TokenHandler.get();
      }

      return response;
    }

    function responseError(rejection) {
      if (rejection.status === 403 || rejection.status === 401) {
        $state.go('app.public.login');
      }
      return rejection;
    }
    return {
      request: request,
      response: response,
      responseError: responseError
    }
  };

  angular.module('app')
    .config(httpConfig);

  httpConfig.$inject = ['$httpProvider'];

  function httpConfig($httpProvider) {
    $httpProvider.interceptors.push('AuthHttpInterceptor');
  }

})();
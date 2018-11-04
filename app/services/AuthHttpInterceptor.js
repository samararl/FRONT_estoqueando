(function () {

  angular.module('app')
    .factory('AuthHttpInterceptor', AuthHttpInterceptor);

  AuthHttpInterceptor.$inject = ['TokenHandler', '$q', '$state'];

  function AuthHttpInterceptor(TokenHandler, $q, $state) {

    function request(config) {
      config.headers = config.headers || {};
      config.headers['Referrer-Policy'] = 'same-origin';
      config.headers['Feature-Policy'] = 'self';
      config.headers['X-Frame-Options'] = 'DENY';
      config.headers['X-XSS-Protection'] = '1; mode=block';
      config.headers['X-Content-Type-Options'] = 'nosniff';
      config.headers['Strict-Transport-Security'] = 'max-age=63072000; includeSubdomains; preload';

      if (TokenHandler.get()) {
        config.headers['Authorization'] = 'Bearer ' + TokenHandler.get();
      }
      return config;
    }

    function responseError(rejection) {
      if (rejection.status === 403 || rejection.status === 401) {
        $state.go('app.public.login');
      }
      return rejection;
    }
    return {
      request: request,
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
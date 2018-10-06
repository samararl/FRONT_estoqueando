(function  () {

    angular.module('app')
      .factory('AuthHttpInterceptor', AuthHttpInterceptor);
  
    AuthHttpInterceptor.$inject = ['TokenHandler','$q', '$state'];
  
    function AuthHttpInterceptor(TokenHandler, $q, $state) {
  
      function request(config) {
        config.headers = config.headers || {};

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
        request : request,
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
  
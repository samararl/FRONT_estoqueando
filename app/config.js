(function () {
  angular.module('app')
    .constant('appSettings', {
      uri: 'https://apiestoqueando.herokuapp.com',
      apiUrl: '/api/',
      authUrl: '/auth/',
    });
})();
//
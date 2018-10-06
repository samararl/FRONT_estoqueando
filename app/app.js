var app = angular.module('app',['ui.router','ui.router.state.events', 'ui.validate', 'ui.mask', 'ngStorage'])
.run(function ($rootScope, $state,AuthService) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    if (!AuthService.isAuthenticated() && toState.authorize) {      
        $rootScope.toState = toState.name;
        $rootScope.toStateParams = toParams;
        event.preventDefault();
        $state.go('app.public.login');
    }
  });

})
.directive('menuLateral', function() {
  return {
      restrict: 'E',
      scope: {
          items: '@',
          acao: '&'
      },
      templateUrl: '/app/views/templates/menu-lateral.html'
  };
});

var app = angular.module('app', ['ui.router', 'ui.router.state.events', 'ui.validate', 'ui.mask', 'ngStorage', 'tmh.dynamicLocale', ])
  .run(function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      if (!AuthService.isAuthenticated() && toState.authorize) {
        $rootScope.toState = toState.name;
        $rootScope.toStateParams = toParams;
        event.preventDefault();
        $state.go('app.public.login');
      }
    });

  })
  .directive('menuLateral', function () {
    return {
      restrict: 'E',
      scope: {
        items: '@',
        acao: '&'
      },
      templateUrl: '/app/views/templates/menu-lateral.html'
    };
  })
  .directive('modalDialog', function () {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true,
      transclude: true,
      templateUrl: '/app/views/templates/modal.html',
      link: function (scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function () {
          scope.show = false;
        };
      }
    };
  })
  .directive('loading', function () {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true,
      transclude: true,
      templateUrl: '/app/views/templates/loading.html'
    }
  });
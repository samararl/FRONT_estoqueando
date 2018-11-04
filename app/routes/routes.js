app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  /* $translateProvider.preferredLanguage('pt-br');
  $translateProvider.fallbackLanguage('pt-br');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: 'views/{part}_{lang}.json',
    $http: { cache: true }
  })
  $translateProvider.cloackClassName('translate-cloak');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

  tmhDynamicLocaleProvider.localeLocationPattern('angular-locale_{{locale}}.js')
*/
  $urlRouterProvider.otherwise('/');
  $stateProvider

    .state('app', {
      abstract: true
    })
    //rotas públicas
    .state('app.public', {
      abstract: true
    })
    .state('app.public.home', {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'HomeController'
    })
    .state('app.public.register', {
      url: '/register',
      templateUrl: 'app/views/register/register.html',
      controller: 'RegisterController'
    })
    .state('app.public.login', {
      url: '/login',
      templateUrl: 'app/views/login/login.html',
      controller: 'LoginController'
    })
    .state('app.public.remember', {
      url: '/remember',
      templateUrl: 'app/views/login/remember.html',
      controller: 'RememberController',
    })
    // rotas privadas
    .state('app.private', {
      abstract: true
    })
    .state('app.private.welcome', {
      url: '/welcome',
      templateUrl: 'app/views/application/welcome.html',
      controller: 'WelcomeController',
      authorize: true
    })
    .state('app.private.vitrine', {
      url: '/vitrine',
      templateUrl: 'app/views/application/shop-window.html',
      controller: 'ShopWindowController',
      authorize: true
    })
    .state('app.private.chat', {
      url: '/chat',
      templateUrl: 'app/views/application/chat.html',
      controller: 'ChatController',
      authorize: true
    })
    .state('app.private.stock', {
      url: '/vitrine',
      templateUrl: 'app/views/application/stock.html',
      controller: 'StockController',
      authorize: true
    })
    .state('app.private.purchase', {
      url: '/pedidos',
      templateUrl: 'app/views/application/purchase-order.html',
      controller: 'PurchaseController',
      authorize: true
    })
    .state('app.private.personal', {
      url: '/meus-dados',
      templateUrl: 'app/views/application/personal-data.html',
      controller: 'PersonalController',
      authorize: true
    });




  // Utilizando o HTML5 History API
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });
})
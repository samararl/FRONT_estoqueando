app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
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
      controller: 'ShopViewController',
      authorize: true

    });

    // Utilizando o HTML5 History API
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  })
/*
app.config(function($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    $routeProvider.when('/', {
       templateUrl : 'app/views/home.html',
       controller  : 'HomeController',
    })
    $routeProvider.when('/register', {
       templateUrl : 'app/views/register/register.html',
       controller  : 'RegisterController',
    })
    $routeProvider.when('/login', {
      templateUrl : 'app/views/login/login.html',
      controller  : 'LoginController',
    })
    $routeProvider.when('/welcome',{
      templateUrl : 'app/views/application/welcome.html',
      controller  : 'WelcomeController',
      authorize: true
    })
    $routeProvider.when('/vitrine',{
      templateUrl : 'app/views/application/shop-window.html',
      controller  : 'ShopWindowController',
      authorize: true
    })
   .otherwise ({ redirectTo: '/' });
});*/
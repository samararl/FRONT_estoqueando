
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

   .otherwise ({ redirectTo: '/' });
});
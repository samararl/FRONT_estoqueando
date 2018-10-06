app.factory('TokenHandler', function($window){
  var _token = null;
  
  function getToken() {
    if ($window.sessionStorage.getItem("token")){
      return $window.sessionStorage.getItem("token")
    } else{
      return _token;
    }
  }

  function setToken(token) {
    _token = token;
    $window.sessionStorage.setItem('token', token);
  }

  return {
    get: getToken,
    set: setToken
  };
})

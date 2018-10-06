
app.controller('RegisterController', function($rootScope, $scope, $http, appSettings)
{
    $scope.personData = {};
    $scope.cpfValidate = function(strCPF) {
        var soma;
        var resto;
        soma = 0;
      
      if(angular.isDefined(strCPF)){  
      if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" 
      || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" 
      || strCPF == "88888888888" || strCPF == "99999999999") {          
          return false;
      }

      for (i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      resto = (soma * 10) % 11;
       
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(strCPF.substring(9, 10)) ) return false;
       
      soma = 0;
        for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
       
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
      }
      else{
          return false;
      }
    } 

    $scope.hasSurname = function(input) {
        if(input) {
            var aux = input.split(" ");
            if(aux.length > 1){
                return true;
            }
            return false;
        }
        return false;
    }
  
$scope.addConsultant = function() {
    $scope.loading = true;
    $scope.success = false;
  
    $http.post( appSettings.uri+ '/public/createPerson',{'personData': $scope.personData }, 
    {
        headers: {'Content-Type': 'application/json'} 
    })
    .success(function (data, status, headers, config) {
        $scope.loading = false;
        $scope.success = true;  
    })
    .error(function (data, status, header, config) {
        $scope.loading = false;
        $scope.success = false;
    });
  
    }


});
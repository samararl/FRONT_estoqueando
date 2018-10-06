app.filter('cpf', function() {
  return function(strCPF) {
    strCPF=strCPF.replace(/\D/g,"")
	strCPF=strCPF.replace(/(\d{3})(\d)/,"$1.$2")
	strCPF=strCPF.replace(/(\d{3})(\d)/,"$1.$2")
	strCPF=strCPF.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
	return strCPF
  };
})
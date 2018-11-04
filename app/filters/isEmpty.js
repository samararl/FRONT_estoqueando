app.filter('isEmpty', function () {
    /*

    Exemplo de uso:
    {{list | isEmpty}}

     */
    return function(obj){
        if(angular.isArray(obj)){
            return (obj.length < 1);
        }else if(angular.isObject(obj)){
            var aux;
            for ( aux in obj ){
                if(obj.hasOwnProperty(bar)){
                    return false;
                }
            }
            return true;
        }else{
            if(obj == null || obj == 'null'){
                return true;
            }
            obj = $.trim(obj);
            if(obj.length > 0){
                return false;
            } else {
                return true;
            }
        }
    }
})
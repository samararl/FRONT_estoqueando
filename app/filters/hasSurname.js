app.filter('hasSurname', function(){
    return function (input){
        if(input) {
            var splitted = input.split(" ");
            return splitted.length > 1;
        } else{
            return false;
        }
    }
})
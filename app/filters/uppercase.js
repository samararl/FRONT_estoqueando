app.filter('case', function() {
    return function(input, uppercase) {
        var out = "";
        if ( uppercase ) {
            out = input.toUpperCase();
        } else {
            out = input.toLowerCase();
        }
        return out;
    };
});
app.controller('ChatController', function ($rootScope, $scope, $http, appSettings, $q) {
    var socket = io.connect(appSettings.uri);
    var ready = true;
    var name = $rootScope.user;
    var time = new Date();
    $scope.time = time.getHours() + ':' + time.getMinutes();

    $scope.nickname = name;
    $scope.messages = [];
    $scope.updates = [];

    socket.emit("join", name);

    $scope.submit = function () {
        $scope.time = time.getHours() + ':' + time.getMinutes();
        $scope.nickname = $scope.name;
        $scope.ready = true;
    }
    $scope.submitMessage = function (text) {
        $scope.timeMessage = time.getHours() + ':' + time.getMinutes();
        var message = {
            textMessage: text,
            timeMessage: $scope.timeMessage,
            nickname: $scope.nickname,
            type: 'self'
        }
        $scope.messages.push(message);
        $scope.textMessage = null
        socket.emit("send", text);
    }
    socket.on("update", function (msg) {
        if (ready) {
            var update = {
                message: msg
            }
            $scope.updates.push(update);
        }
        $scope.$apply();
    });

    socket.on("chat", function (client, msg) {
        if (ready) {
            var message = {
                textMessage: msg,
                timeMessage: $scope.timeMessage,
                nickname: client,
                type: 'other'
            }
            $scope.messages.push(message);
        }
        $scope.$apply();
    });

});
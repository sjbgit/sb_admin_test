/**
 * Created by sbunke on 4/3/2015.
 */
angular.module('sbAdminApp')
    .factory('socket', function ($rootScope) {
        var socket = io.connect('http://bppcount1.azurewebsites.net:80/');
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            }
        };
    });
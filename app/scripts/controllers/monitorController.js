/**
 * Created by sbunke on 4/3/2015.
 */
angular.module('sbAdminApp')
    .controller('MonitorCtrl', ['$scope', '$timeout', 'socket', function ($scope, $timeout, socket) {
        $scope.info = 'this is the info';

        var socket = io.connect('http://bppcount1.azurewebsites.net:80/');

        socket.on('counter', function (msg) {
            console.log('received counter message ------------');
            console.log(msg);

        });

        /*

        socket.on('message', function(data) {

            var x = data;

        });

        */

    }]);
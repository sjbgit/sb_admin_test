/**
 * Created by sbunke on 4/3/2015.
 */
angular.module('sbAdminApp')
    .controller('MonitorCtrl', ['$scope', '$timeout', 'socket', function ($scope, $timeout, socket) {
        $scope.info = 'this is the info';


        //this works
        //var socket = io.connect('http://bppcount1.azurewebsites.net:80/');

        socket.on('counter', function (msg) {
            console.log('received counter message ------------');
            console.log(msg);

        });

        $scope.value = 3;
        $scope.upperLimit = 6;
        $scope.lowerLimit = 0;
        $scope.unit = "kW";
        $scope.precision = 2;
        $scope.ranges = [
            {
                min: 0,
                max: 1.5,
                color: '#DEDEDE'
            },
            {
                min: 1.5,
                max: 2.5,
                color: '#8DCA2F'
            },
            {
                min: 2.5,
                max: 3.5,
                color: '#FDC702'
            },
            {
                min: 3.5,
                max: 4.5,
                color: '#FF7700'
            },
            {
                min: 4.5,
                max: 6.0,
                color: '#C50200'
            }
        ];


        /*

        socket.on('message', function(data) {

            var x = data;

        });

        */

    }]);
/**
 * Created by sbunke on 4/23/2015.
 */
angular.module('sbAdminApp')
    .controller('RedisCtrl', ['$scope', '$timeout', 'socket', function ($scope, $timeout, socket) {
        $scope.info = 'this is the info';

        $scope.redisServers = []

        socket.on('redis', function (data) {
            console.log('received redis data ------------');
            console.log(data);

            var copiedMsg = angular.copy(data);
            var index = getCounterIndex(data);

            console.log('returned index ' + index);

            if (index === -1) {
                $scope.redisServers.push(copiedMsg);
            }
            else {
                $scope.redisServers[index] = copiedMsg;
            }

        });




        function getCounterIndex(counter) {
            var index = -1;
            var arrayLength = $scope.redisServers.length;
            for (var i = 0; i < arrayLength; i++) {
                console.log($scope.redisServers[i].name);
                if ($scope.redisServers[i].name === counter.name) {
                    index = i;
                    break
                }
            }
            return index;
        }


    }]);
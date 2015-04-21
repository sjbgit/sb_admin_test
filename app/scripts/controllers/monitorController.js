/**
 * Created by sbunke on 4/3/2015.
 */
angular.module('sbAdminApp')
    .controller('MonitorCtrl', ['$scope', '$timeout', 'socket', function ($scope, $timeout, socket) {
        $scope.info = 'this is the info';


        $scope.machineCounters = [];



        $scope.safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        $scope.changeValue = function() {

            $scope.safeApply(function() {
                $scope.value = 3;
            });

            //$scope.value = 3;
            //$scope.$apply();
        }


        //this works
        //var socket = io.connect('http://bppcount1.azurewebsites.net:80/');

        socket.on('counter', function (msg) {
            console.log('received counter message ------------');
            console.log(msg);

        });

        socket.on('counter', function (data) {
            var counters = data.counters;
            console.log('received counter message ------------');
            console.log(counters[0].value);
            

            $scope.safeApply(function() {
                $scope.value = counters[0].value;
            });

            var copiedMsg = angular.copy(data);
            var index = getCounterIndex(data);

            console.log('returned index ' + index);

            if (index === -1) {
                $scope.machineCounters.push(copiedMsg);
            }
            else {
                $scope.machineCounters[index] = copiedMsg;
            }


        });

        function getCounterIndex(counter) {
            var index = -1;
            var arrayLength = $scope.machineCounters.length;
            for (var i = 0; i < arrayLength; i++) {
                console.log($scope.machineCounters[i].machine);
                if ($scope.machineCounters[i].machine === counter.machine) {
                    index = i;
                    break
                }
            }
            return index;
        }


        setPerfCounterInfo();

        //setSampleGaugeInfo();


        function setPerfCounterInfo() {

            //pass this into directive - with a name and id?
            $scope.value = 50;
            $scope.upperLimit = 100;
            $scope.lowerLimit = 0;
            $scope.unit = "% CPU";
            $scope.precision = 0;
            $scope.ranges = [
                {
                    min: 0,
                    max: 20,
                    color: '#DEDEDE'
                },
                {
                    min: 20,
                    max: 40,
                    color: '#8DCA2F'
                },
                {
                    min: 40,
                    max: 60,
                    color: '#FDC702'
                },
                {
                    min: 60,
                    max: 80,
                    color: '#FF7700'
                },
                {
                    min: 80,
                    max: 100,
                    color: '#C50200'
                }
            ];

        }



        function setSampleGaugeInfo() {

            $scope.value = 1.5;
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

        }

        $scope.$on("$destroy", function() {

        });


        /*

         socket.on('message', function(data) {

         var x = data;

         });

         */

    }]);
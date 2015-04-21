'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ChartCtrl', ['$scope', '$timeout', '$interval', function ($scope, $timeout, $interval) {

        //$interval($scope.changeData, 3000, 0, true);

        $scope.changeData = function () {
            var data = [88, 22, 30, 90, 2, 78, 4];

            var value = randomIntFromInterval(0, 100);

            $scope.line.data[0].unshift(value);
            $scope.line.data[0].pop();

            var value1 = randomIntFromInterval(0, 100);

            $scope.line.data[1].unshift(value1);
            $scope.line.data[1].pop();

            var value2 = randomIntFromInterval(0, 100);

            $scope.line.data[2].unshift(value2);
            $scope.line.data[2].pop();

            //$scope.line.data[0] = data;

            $scope.bar.data[0] = [2, 90, 44, 76, 2, 12, 18];

            //$scope.$apply();
        }

        function randomIntFromInterval(min,max)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        $scope.line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80, 81, 56, 55, 40, 77, 81, 12 ,99, 3],
                [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40],
                [86, 27, 90, 80, 81, 55, 40, 77, 81, 44, 3, 22]
            ],
            onClick: function (points, evt) {
                console.log(points, evt);
            }
        };

        $scope.bar = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            series: ['Series A', 'Series B'],

            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ]

        };

        $scope.donut = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        };

        $scope.radar = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

            data: [
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ]
        };

        $scope.pie = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        };

        $scope.polar = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120]
        };

        $scope.dynamic = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120],
            type: 'PolarArea',

            toggle: function () {
                this.type = this.type === 'PolarArea' ?
                    'Pie' : 'PolarArea';
            }
        };
    }]);
'use strict';
/* global window */

(function(app) {
    app.infraStart.controller('nav', ['$scope', '$http', '$interval', '$log', function($scope, $http, $interval, $log) {
        $scope.updateMenu = function() {
            $http.get('/navigation').then(function(response) {
                $scope.menu = response.data;
            });
        };

        // update interval chosen by dice role :p
        $interval($scope.updateMenu, 10000);

        $scope.updateMenu();
    }]);
})(window.app);

app.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    window.headerConfig = {
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);
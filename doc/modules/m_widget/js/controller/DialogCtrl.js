app.controller('DialogCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    window.headerConfig={
        enableHeader: true,
        enableBack: false,
        title: '弹出框'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

}]);
app.controller('StyleCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
    window.headerConfig={
        enableHeader: true,
        enableBack: false,
        title: '样式说明'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);
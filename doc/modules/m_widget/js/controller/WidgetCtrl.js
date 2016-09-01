app.controller('WidgetCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
    window.headerConfig={
        enableHeader: true,
        enableBack: false,
        title: '组件说明'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);
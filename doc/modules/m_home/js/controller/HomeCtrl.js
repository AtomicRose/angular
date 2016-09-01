app.controller('HomeCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
    window.headerConfig={
        enableHeader: true,
        enableBack: false,
        title: '说明文档'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);
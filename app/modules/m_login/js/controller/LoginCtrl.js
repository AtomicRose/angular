app.controller('LoginCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: false,
        title: '登录',
        otherRightOperate: {
            enable: true,
            html: '注册',
            clickCall: function () {
                $state.go('layout.register');
            }
        }
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);
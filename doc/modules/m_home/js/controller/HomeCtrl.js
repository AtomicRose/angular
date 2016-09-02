app.controller('HomeCtrl', ['$scope','$rootScope','BaseHttpRequest','dialog', function ($scope,$rootScope,BaseHttpRequest,dialog) {
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

    BaseHttpRequest.get({
        url: 'http://m.mingyizhudao.com/api/hospital',
        params: {
            api: 6,
            city: 0,
            getcount:1
        }
    });
}]);
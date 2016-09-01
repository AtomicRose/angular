app.controller('LayoutCtrl', ['$scope','$rootScope',function ($scope, $rootScope) {
    if(!window.headerConfig){
        window.headerConfig = {};
    }
    if(!window.footerConfig){
        window.footerConfig = {};
    }

    $scope.menuList =[
        {
            text: '首页',
            class: 'icon-home',
            route: 'layout.home'
        },
        {
            text: '医院',
            class: 'icon-hospital',
            route: 'layout.hospital'
        },
        {
            text: '发现',
            class: 'icon-find',
            route: 'layout.find'
        },
        {
            text: '个人',
            class: 'icon-me',
            route: 'layout.me'
        }
    ];

    $scope.orderListOptions = {
        //snap: 'li',
        topLoadingTip: '刷新中',
        bottomLoadingTip: '努力加载中',
        ignoreLoading: 'all',
        click: true,
        topCall: function (beforeCall, endCall) {
            if ($scope.isLastPage) {

            } else {
                $scope.page = 0;
                $scope.orderList = [];
                getOrderList();
            }
        },
        bottomCall: function (beforeCall, endCall) {
            if ($scope.isLastPage) {
                dialog.toast('已经是最后啦');
            } else {
                $scope.page++;
                getOrderList();
            }
        }
    };
}]);
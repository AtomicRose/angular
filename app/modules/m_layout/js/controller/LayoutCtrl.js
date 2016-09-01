app.controller('LayoutCtrl', ['$scope','$rootScope',function ($scope, $rootScope) {
    if(!window.headerConfig){
        window.headerConfig = {};
    }

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
app.directive('footerWidget',function(){
    var ctrl = ['$scope', '$rootScope', 'StorageConfig', '$state', function ($scope, $rootScope, StorageConfig, $state) {
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
        $scope.selectedIndex = StorageConfig.FOOTER_STORAGE.getItem('selectedItemIndex') || 0;
        $scope.selectItem = function(item, index){
            if($scope.selectedIndex != index){
                $scope.selectedIndex = index;
                StorageConfig.FOOTER_STORAGE.putItem('selectedItemIndex', index);
                if(item.route){
                    $state.go(item.route);
                }
            }
        };
    }];
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        controller: ctrl,
        templateUrl: "template/footer.html",
        scope: {},
        link: function () {

        }
    }
});
app.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/footer.html',
        '<footer class="footer">\
            <div class="item" ng-repeat="item in menuList" ng-click="selectItem(item, $index)"><span class="icon {{item.class}}" ng-class="{\'active\':$index == selectedIndex}"></span><span class="text" ng-class="{\'active\':$index == selectedIndex}" ng-bind="item.text"></span></div>\
        </footer>');
}]);
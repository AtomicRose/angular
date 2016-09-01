app.directive('footerWidget',function(){
    var ctrl = ['$scope', '$rootScope', 'StorageConfig', '$state','helper', function ($scope, $rootScope, StorageConfig, $state,helper) {
        var defaults = {
            enableFooter:false
        };
        $scope.defaults = angular.extend(defaults, window.footerConfig);
        $rootScope.$on('setFooterConfig', function (event, data) {
            $scope.defaults = angular.extend(defaults, data);
        });
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
        scope: {
            menuList: '='
        },
        link: function () {

        }
    }
});
app.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/footer.html',
        '<footer class="layout-footer" id="layoutFooter" ng-show="defaults.enableFooter">\
        <div class="footer">\
            <div class="item" ng-repeat="item in menuList" ng-click="selectItem(item, $index)"><span class="icon {{item.class}}" ng-class="{\'active\':$index == selectedIndex}"></span><span class="text" ng-class="{\'active\':$index == selectedIndex}" ng-bind="item.text"></span></div>\
        </div></footer>');
}]);
app.directive('scrollWidget', [function () {
    var ctrl = ['$scope', function ($scope) {
        $scope.defaults = {
            topLoadingTip: '刷新',
            bottomLoadingTip: '加载中'
        };
        angular.extend($scope.defaults, $scope.options);
    }];
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        controller: ctrl,
        templateUrl: "template/iScroll.html",
        scope: {
            id: '@',
            otherClass: '@',
            options: '='
        },
        link: function (scope, element) {
            var temp = setInterval(function () {
                if (IScroll) {
                    clearInterval(temp);
                    main();
                }
            }, 500);

            function main() {
                var defaults = angular.extend(scope.defaults, scope.options);
                var e_scroll = document.getElementById(scope.id);
                var thisScroll;

                var startX, startY, endX, endY;
                thisScroll = new IScroll(e_scroll, defaults);
                setInterval(function(){
                    thisScroll.refresh();
                },500);
                if (!window.scrollObj) {
                    window.scrollObj = {};
                }
                window.scrollObj[scope.id] = thisScroll;

                thisScroll.on('beforeScrollStart', function () {

                });
                thisScroll.on('scrollStart', function () {
                    startX = this.x;
                    startY = this.y;
                });
                thisScroll.on('scroll', function () {

                });
                thisScroll.on('scrollEnd', function () {
                    endX = this.x;
                    endY = this.y;
                    if (startY == endY) {
                        if (startY == 0 && endY == 0) {
                            defaults.topCall(function () {
                                showLoading(1);
                            }, function () {
                                closeLoading();
                            });
                        } else {
                            defaults.bottomCall(function () {
                                showLoading(2);
                            }, function () {
                                closeLoading();
                            });
                        }
                    }
                });
                thisScroll.on('scrollCancel', function () {

                });
            }

            function closeLoading(value) {
                var top = document.getElementById(scope.id + '_scroll_top_loading');
                var bottom = document.getElementById(scope.id + '_scroll_bottom_loading');
                if (!value || value == 0) {
                    top.style.display = 'none';
                    bottom.style.display = 'none';
                }
                if (value == 1) {
                    top.style.display = 'none';
                }
                if (value == 2) {
                    bottom.style.display = 'none';
                }
            }

            function showLoading(value) {
                var top = document.getElementById(scope.id + '_scroll_top_loading');
                var bottom = document.getElementById(scope.id + '_scroll_bottom_loading');
                if (!value || value == 0) {
                    top.style.display = 'block';
                    bottom.style.display = 'block';
                }
                if (value == 1) {
                    top.style.display = 'block';
                }
                if (value == 2) {
                    bottom.style.display = 'block';
                }
            }
        }
    }
}]);
app.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/iScroll.html',
        '<div class="i-scroll {{otherClass}}">\
            <div ng-transclude id="{{id}}_scroll_content"></div>\
            <div class="top-loading" id="{{id}}_scroll_top_loading" ng-bind="defaults.topLoadingTip"></div>\
            <div class="bottom-loading" id="{{id}}_scroll_bottom_loading" ng-bind="defaults.bottomLoadingTip"></div>\
        </div>'
    );
}]);
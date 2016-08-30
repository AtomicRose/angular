app.directive('header',[function(){
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: ctrl,
        templateUrl: "template/iScroll.html",
        scope: {
            id: '@',
            otherClass: '@',
            options: '='
        },
        link: function(){

        }
    }
}]);
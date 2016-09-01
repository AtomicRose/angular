app.controller('FindCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        title: '发现'
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
}]);
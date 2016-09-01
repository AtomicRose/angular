app.controller('MeCtrl',['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
}]);
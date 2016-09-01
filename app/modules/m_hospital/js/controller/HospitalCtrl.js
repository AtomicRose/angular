app.controller('HospitalCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        title: '推荐'
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
}]);
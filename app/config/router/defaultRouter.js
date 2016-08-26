app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'app/modules/m_test/view/index.html',
            resolve:{
                load:['$q',function($q){
                    var defer = $q.defer();
                    DynamicLoad.ready({
                        components: ['iScroll', ['dialog', false],['helper',false],['filter',false]]
                    }, ['dialog','helper',function (dialog,helper) {
                        defer.resolve();
                    }]);
                    return defer.promise;
                }]
            }
        })
}]);
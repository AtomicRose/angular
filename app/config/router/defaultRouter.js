app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('test', {
            url: '/test',
            templateUrl: 'app/modules/m_test/view/index.html'
        })
        .state('layout', {
            url: '/layout',
            templateUrl: 'app/modules/m_layout/view/index.html'
        })
}]);
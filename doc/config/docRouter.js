app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/doc/home');
    $urlRouterProvider.when('/doc', '/doc/home');
    $stateProvider
        .state('doc', {
            url: '/doc',
            templateUrl: 'doc/modules/m_layout/view/index.html'
        })
        .state('doc.home',{
            url: '/home',
            templateUrl: 'doc/modules/m_home/view/index.html'
        })
        .state('doc.style',{
            url: '/style',
            templateUrl: 'doc/modules/m_style/view/index.html'
        })
        .state('doc.widget', {
            url: '/widget',
            templateUrl: 'doc/modules/m_widget/view/index.html'
        })
}]);
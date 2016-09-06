app.controller('LoginCtrl', ['$scope', '$rootScope', '$state', 'LoginService', 'dialog','helper', function ($scope, $rootScope, $state, LoginService, dialog, helper) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: false,
        title: '登录',
        otherRightOperate: {
            enable: true,
            html: '注册',
            clickCall: function () {
                $state.go('layout.register');
            }
        }
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    /*****the business*******/
    $scope.selectedTab = 0;
    $scope.checkTab = function (value) {
        $scope.selectedTab = value;
    };

    $scope.doPasswordLogin = function () {
        var spinner = dialog.showSpinner();
        var params = {
            userLogin:{
                username: $scope.passwordLogin.phone,
                password: $scope.passwordLogin.password
            }
        };
        LoginService.passwordLogin(params).then(function (res) {
            dialog.closeSpinner(spinner.id);
            //TODO add the authorization to the session and the request.
            if(helper.getUrlParam('redirectUri')){
                window.location.href = decodeURIComponent(helper.getUrlParam('redirectUri'));
                return true;
            }
            if(helper.getUrlParam('redirectRoute')){
                $state.go(decodeURIComponent(helper.getUrlParam('redirectRoute')));
                return true;
            }
            $state.go('layout.home');
        }, function (res) {
            dialog.closeSpinner(spinner.id);
            dialog.alert(res.errorMsg);
        });
    };
}]);
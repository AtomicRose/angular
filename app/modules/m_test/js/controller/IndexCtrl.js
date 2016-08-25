app.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.hello = 'This is the index html.';
    // DynamicLoad.ready();
    DynamicLoad.includeComponents(['iScroll', ['dialog', false]]);
    DynamicLoad.ready({
        components: ['iScroll', ['dialog', false]]
    }, ['dialog',function (dialog) {
        console.log(1);
    }]);
    // DynamicLoad.includeComponents(['dialog']);
    // DynamicLoad.includeJs(['components/dialog.js'], function(){
    //     console.log(IScroll.utils);
    //     console.log('jsjs');
    // });
    // setTimeout(function(){
    //     DynamicLoad.includeJs(['components/dialog.js','components/dialog.js','components/iScroll.js'], function(){
    //         console.log(IScroll.utils);
    //         console.log('jsjs');
    //     });
    // },3000);
    // DynamicLoad.ready(function(){
    //     console.log('call the ready');
    // });
    //
    // DynamicLoad.includeCss(['components/iScrolla.css'], function(){
    //     console.log('csscss');
    // });
}]);

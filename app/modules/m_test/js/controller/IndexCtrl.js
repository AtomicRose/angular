angular.module('myzd-app').controller('IndexCtrl', ['$scope','$compile', function ($scope,$compile) {
    $scope.hello = 'This is the index html.';
    // console.log('thisCtrl',IndexCtrl);
    // console.log('thisCtrl',IndexCtrl.provider());
    // console.log($ngInject.DynamicLoad);
    // DynamicLoad.ready();
    //$ngInject.test();
    // DynamicLoad.includeComponents(['iScroll', ['dialog', false]]);


     DynamicLoad.ready({
         components: ['iScroll', ['dialog', false],['helper',false]],
         jsFiles:[],
         cssFiles:[],
         modules:['ngDialog']
     }, ['dialog','helper',function (dialog,helper) {
         console.log(dialog);
         console.log(helper);
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

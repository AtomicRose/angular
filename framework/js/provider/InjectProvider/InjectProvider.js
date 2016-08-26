// (function (root, factory) {
//     if (typeof module !== 'undefined' && module.exports) {
//         // CommonJS
//         module.exports = factory(require('angular'));
//     } else if (typeof define === 'function' && define.amd) {
//         // AMD
//         define(['angular'], factory);
//     } else {
//         // Global Variables
//         factory(root.angular);
//     }
// }(this, function (angular, undefined) {
//     'use strict';
//     setTimeout(function(){
//         DynamicLoad.ready({
//             components: ['iScroll', ['dialog', false]]
//         }, ['dialog',function (dialog) {
//             var m = angular.module('ngInject',[]);
//             m.requires.push('ngDialog');
//             m.provider('$ngInject',function(){
//                 this.$get=['$http',function($http){
//                     console.log(app);
//                     //app.requires.push('ngDialog');
//                     var publicMethod = {
//                         test: function(){
//                             console.log('$ngInject.call');
//                         }
//                     };
//                     return publicMethod;
//                 }];
//             });
//             app.requires.push('ngInject');
//         }]);
//     },3000);
// }));
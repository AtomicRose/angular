app.factory('BaseHttpRequest', ['$http', '$q', function ($http, $q) {

    var httpRequest = {};
    var defaults = {
        timeout: 6000,
        responseType: "json"
    };
    httpRequest.get = function(requestObj, dataDto){
        var config = {
            method: 'GET'
        };
        var obj = angular.extend(defaults, angular.extend(config, requestObj));
        return _responseDto($http(obj));
    };
    function _responseDto(httpPromise){
        var promise = httpPromise;
        promise.success(function(data,status,headers,config){
            console.log('success');
        }).error(function(data,status,headers,config){
            console.log('error');
        });
    }
    return httpRequest;
}]);
var myApp = angular.module('app',[]);

myApp.service('dataService', function($http) {
    this.getData = function(callbackFunc) {
        $http({
            method: 'GET',
            url: '/sity/getAll',
        }).success(function(data){
            callbackFunc(data);
        }).error(function(){
            alert("error");
        });
     }
});

myApp.service('serviceGetOne', function($http) {
    this.getData = function(callbackFunc,id) {
        $http({
            method: 'GET',
            url: '/sity/getOne/'+id,
        }).success(function(data){
            callbackFunc(data);
        }).error(function(){
            alert("error");
        });
     }
});

myApp.controller('HttpGetController', function($scope, dataService,serviceGetOne) {
    $scope.datas = [];
    dataService.getData(function(dataResponse) {
        $scope.datas = dataResponse;
    });
	
	$scope.change = function() {
		if($scope.id!=""){
			serviceGetOne.getData(function(dataResponse) {$scope.datas = dataResponse;},$scope.id);
		}else {
			dataService.getData(function(dataResponse) {$scope.datas = dataResponse;});
		}

	};
});

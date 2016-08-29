Var app=angular.module(‘app’,[]);
app.controller(‘searchController’,[function($scope, $http,searchFactory){
     $scope.flightDetails=[ ];
     Function searchDetails() {
        searchFactory.getDetails().then(function(data){
        $scope.flightDetails = details;
},
});
function(errorMessage) {
    $scope.error =errorMessage;
};
        searchDetails();   
}]);
    
app.factory(‘searchFactory’, function($http,$q){
return {
    apiPath:’ ’ // api path should be specified 
    getDetails: function() {
    Var deferred =$q.defer();
    $http.get(this.apiPath).success(function(details) {
    deferred.resolve(details);
  })
    .error(function(){
   deferred.reject(“ Error fetching the data”);
});
Return deferred.promise ;       
}
});
var app=angular.module("myApp" , []);
app.controller("myController" , ["$scope" , function($scope){
$scope.message="welcome to hyderabad"
}])

app.directive("myCustomerDetailsDirective" , function(){
return{
restrict : 'EACM' ,
template : "<h1>this is my custom directives</h1>" ,
replace :true
}

})
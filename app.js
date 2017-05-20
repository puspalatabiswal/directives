var app=angular.module("myApp" , []);
app.controller("myController" , ["$scope" , function($scope){
$scope.message="welcome to hyderabad";
$scope.companyName="techminds"
$scope.arrayUsers=
[
{
     name : "puspa biswal",
     address : "madhapur , hyderabad"
 } ,

 {
     name : "pooja biswal",
     address : "madhapur , hyderabad"
 },


 {
     name : "liza biswal",
     address : "madhapur , hyderabad"
 }

]





$scope.userDetails ={
     name : "puspa biswal",
     address : "madhapur , hyderabad"
 }

$scope.changeCompanyName = function()
{
	$scope.companyName= "techmind solutions";
}

}])

app.directive("myCustomerDetailsDirective" , function(){
return{
restrict : 'EACM' ,
templateUrl : 'customerdetails.html' ,
 replace :true ,
            scope : 
            {
             companyName : '@' ,
             userDetails : '=' ,
             changeCompanyName : '&' ,
            arrayUsers : '='

              }


}

} )
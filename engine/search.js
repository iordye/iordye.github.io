var test = "I am testing";
var app = angular.module("mosesHavelockApp", []);
app.run(function($rootScope){
    $rootScope.pages = _sitePages;
});
app.controller("searchApp", function($scope){
    $scope.images = [
        {name : "Outdoor"}
    ];
});
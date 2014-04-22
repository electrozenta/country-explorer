var countries = angular.module('countries', []);

countries.controller('CountryController', function($scope) {
    var rawData = window.rawData["Results"];
    $scope.countries = Object.keys(rawData).map(function(key) {
        return rawData[key];
    });

    $scope.predicate = 'Name';


});
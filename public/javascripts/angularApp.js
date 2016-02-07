/**
 * Created by alejandrok on 2/6/16.
 */
var app = angular.module('online-furniture', []);


app.controller('BuyCtrl', function($scope) {

    $scope.submit = function() {
        $scope.list = [];
        $scope.list.push($scope.text);
        console.log(this.text);
        $scope.text = '';
    };

});



function buyCtrl($scope) {

    $scope.submit = function() {
        $scope.list = [];
        $scope.list.push($scope.text);
        console.log(this.text);
        $scope.text = '';
    };

}

//var mongoose = require('mongoose');
//var Product = mongoose.model('Product');




//user clicks buy
//let user input payment info (stripe checkout)
//add product to queue
// make new entry in orders db
//






var app = angular.module('fayble', []);

app.controller('ProductCtrl', function($scope) {

	var p = {name: "Tree Bookshelf", description : "This is an example of a description", 
	price: 50, 
	url: "http://dummyurl.com/file"
	}
	
	$scope.p = p;


 $scope.buyNow = function() {

		//$http.post("/purchase", p)

		$scope.purchase = "Thank you for your purchase!";
			console.log('button pressed');

}


	
});
app.controller("fibonacci", function($scope) {
	$scope.initializeFibonacci = function() {
		$scope.fibonacciId = document.getElementById("fibonacci");
	}

    $scope.updateFibonacci = function() {
        
        // Create initial variables.
		var prev    = 0;
		var current = 1;
		var next    = 0;

    	// Reset the fibonacci series on screen.
    	$scope.fibonacciId.innerHTML = "";

    	// Update series size.
		$scope.seriesSize = clamp(0, $scope.seriesSize, 1477);

    	// Create list items for fibonacci numbers.
		for (var i = 0; i < $scope.seriesSize; i++) {
			// Put the numbers on the screen as list items.
			$scope.fibonacciId.innerHTML += "<li>" + current + "</li>";

			// Increment the variables through the fibonacci numbers.
			next    = prev + current;
			prev    = current;
			current = next;
		}
	}
});
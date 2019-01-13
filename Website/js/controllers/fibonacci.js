app.controller("fibonacci", function($scope) {
    $scope.fibonacciId = "fibonacci";
    $scope.numSize     = 10;

    $scope.updateFibonacci = function() {
        
        // Create initial variables.
		var numbers = document.getElementById($scope.fibonacciId);
		var prev    = 0;
		var current = 1;
		var next    = 0;
		var numSize = clamp(0, $scope.numSize, 1477);

    	// Reset the fibonacci series on screen.
    	numbers.innerHTML = "";

    	// Create list items for fibonacci numbers.
		for (var i = 0; i < numSize; i++) {
			// Put the number on the screen as a list item.
			numbers.innerHTML += "<li>" + current + "</li>";

			// Increment the variables through the fibonacci numbers.
			next    = prev + current;
			prev    = current;
			current = next;
		}
	
		// Reset the variables just to be thorough.
		prev    = 0;
		current = 0;
		next    = 0;
	}
});
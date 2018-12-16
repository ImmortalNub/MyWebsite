app.controller("myController", function($scope) {
    $scope.firstName       = "Brian";
    $scope.lastName        = "Janis";
    $scope.fibonacciId     = "fibonacci";
    $scope.numSize         = 50;
    $scope.updateFibonacci = function() {
        
        // Create initial variables.
		var numbers = document.getElementById($scope.fibonacciId);
		var prev    = 0;
		var current = 1;
		var next    = 0;

    	// Reset the fibonacci series on screen.
    	numbers.innerHTML = "";
	
		// Create list items for fibonacci numbers.
		for (var i = 0; i < $scope.numSize; i++) {
			// Create the list element.
			var newNumber = document.createElement("li");
	
			// Put the current fibonacci number on the screen.
			newNumber.innerHTML = current;
			numbers.appendChild(newNumber);
	
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
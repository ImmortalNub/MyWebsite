var app = angular.module("myModule", []);

/**************************************************************************
* Use: Returns a number limited to minimum and maximum values.
* 
* Arguments:
* 		int min: The minimum value the number can be.
* 		int num: The number being tested.
* 		int max: The maximum value the number can be.
* 
* Return: min, num, or max.
***************************************************************************/
function clamp(min, num, max) {
	// Too small.
	if (num < min)
		return min;

	// Too large.
	if (num > max)
		return max;

	return num;
}

/**************************************************************************
* Use: Called at the HTML body, and calls the initial methods.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function initialization() {}
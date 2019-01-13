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
* Use: Populates a dropdown list with labels and links to the sources.
* 	The list items will open a new tab when clicked on.
* 
* Arguments:
* 		string id: Target ID of the element to add list items. Must be a ul or ol.
* 		object links: An array-like object containing hyperlinks, with their labels as indexes.
* 
* Return: None
***************************************************************************/
function dropdownList(id, links) {
	// Place a focus on the list to be populated by id.
	var linkList = document.getElementById(id);

	// Append list items to the list that contain links.
	for (var link in links) {
		linkList.innerHTML += "<li><a href=" + links[link] + " target='_blank' rel='noopener noreferrer'>"
							       + link +
							  "</a></li>";
	}
}

/**************************************************************************
* Use: Called at the HTML body, and calls the initial methods.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function initialization() {}
var app = angular.module("myModule", []);

// General

/**************************************************************************
* Use: Populates a dropdown list with titles and links to the sources.
* 	The list items will open a new tab when clicked on.
* 
* Arguments:
* 		string id: Target ID of the element to add list items. Must be a ul or ol.
* 		string titles[]: Array of titles with hyperlinks as their indexes.
* 
* Return: None
***************************************************************************/
function dropdownList(id, titles) {
	// Create list items with a URL and a title.
	var links = document.getElementById(id);
	for (var url in titles) {
		// Create the list element
		var newLink = document.createElement("li");

		// Populate list element with an anchor with the url and a label.
		newLink.innerHTML = "<a href=" + url + " target='_blank' rel='noopener noreferrer'>"
								+ titles[url] +
							"</a>";
		links.appendChild(newLink);
	}
}

/**************************************************************************
* Use: Calculates the fibonacci series.
* 
* Arguments:
* 		string id: Target ID of the list to be populated with the fibonacci series.
* 		int size: Determines how many numbers of the series will be printed.
* 
* Return: None
***************************************************************************/
function fibonacci(id, size) {
	// Create initial variables.
	var numbers = document.getElementById(id);
	var prev    = 0;
	var current = 1;
	var next    = 0;

	// Create list items for fibonacci numbers.
	for (var i = 0; i < size; i++) {
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

/**************************************************************************
* Use: Called at the HTML body, and calls the initial methods.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function initialization() {
	populateDropdowns();
	fibonacci("fibonacci", 50);
}

/**************************************************************************
* Use: Populates the dropdown lists.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function populateDropdowns() {
	basicTutorials();
	buckyTutorials();
	miscNotes();
}

// W3Schools
/**************************************************************************
* Use: Dropdown list for W3Schools.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function basicTutorials() {
	// Set element ID.
	var id = "w3schools";
	// Create an array-like object for titles.
	var titles = {
			"https://www.w3schools.com/colors/colors_picker.asp": "Color Picker",
			"https://www.w3schools.com/css/default.asp":          "CSS",
			"https://www.w3schools.com/bootstrap/default.asp":    "Bootstrap",
			"https://www.w3schools.com/js/default.asp":           "JavaScript",
			"https://www.w3schools.com/jquery/default.asp":       "jQuery",
			"https://www.w3schools.com/angular/default.asp":      "AngularJS",
			"https://www.w3schools.com/php/default.asp":          "PHP"
	};

	// Call dropdownList with titles.
	dropdownList(id, titles);
}

// TheNewBoston
/**************************************************************************
* Use: Populates the dropdown lists for Bucky's tutorials.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function buckyTutorials() {
	buckyHTML();
	buckyAngularJS();
}

/**************************************************************************
* Use: Dropdown list for Bucky's AngularJS tutorials.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function buckyAngularJS() {
	// Set element ID.
	var id = "bucky-angular-js";
	// Create an array-like object for titles.
	var titles = {
			"https://www.youtube.com/watch?v=hXfigUyeHaY&list=PL6gx4Cwl9DGBYxWxJtLi8c6PGjNKGYGZZ&ab_channel=thenewboston":         "1: Getting Started",
			"https://www.youtube.com/watch?v=vc9n0j6-D2U&index=2&list=PL6gx4Cwl9DGBYxWxJtLi8c6PGjNKGYGZZ&ab_channel=thenewboston": "2: Overview and Core Concepts"
	};

	// Call dropdownList with titles.
	dropdownList(id, titles);
}

/**************************************************************************
* Use: Dropdown list for Bucky's HTML tutorials.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function buckyHTML() {
	// Set element ID.
	var id = "bucky-html";
	// Create an array-like object for titles.
	var titles = {
			"https://www.youtube.com/watch?v=yNtIO4X6cag&index=12&list=PL081AC329706B2953&ab_channel=thenewboston":          "12: Making Everything Pretty",
			"https://www.youtube.com/watch?v=tzAEGnBNAn0&index=13&list=PL081AC329706B2953&ab_channel=thenewboston":          "13: Finishing The Layout",
			"https://www.youtube.com/watch?v=xgYmccJ61eA&list=PL081AC329706B2953&index=14&frags=wn&ab_channel=thenewboston": "14: Flexible Box Model",
			"https://www.youtube.com/watch?v=bi7ccKky8JU&list=PL081AC329706B2953&index=15&frags=wn&ab_channel=thenewboston": "15: Styling the Header and Navigation"
	};

	// Call dropdownList with titles.
	dropdownList(id, titles);
}

// Notes
/**************************************************************************
* Use: Dropdown list for miscellaneous notes.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function miscNotes() {
	// Set element ID.
	var id = "misc-notes";
	// Create an array-like object for titles.
	var titles = {
			"https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file": "Html within Html",
			"https://www.w3schools.com/angular/angular_modules.asp":                                "Angular Modules and Controllers in Files"
	};

	// Call dropdownList with titles.
	dropdownList(id, titles);
}
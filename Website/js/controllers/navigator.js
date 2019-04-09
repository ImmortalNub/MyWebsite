app.controller("navigator", function($scope) {
	populateDropdowns();
});

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
	kudvenkat();
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
	var id = "w3-schools";

	var buttonName = "W3 Schools";

	// Create an array-like object for titles.
	var links = {
		"Color Picker":        "https://www.w3schools.com/colors/colors_picker.asp",
		"CSS":                 "https://www.w3schools.com/css/default.asp",
		"Bootstrap":           "https://www.w3schools.com/bootstrap/default.asp",
		"JavaScript":          "https://www.w3schools.com/js/default.asp",
		"jQuery":              "https://www.w3schools.com/jquery/default.asp",
		"AngularJS":           "https://www.w3schools.com/angular/default.asp",
		"AngularJS Reference": "https://www.w3schools.com/angular/angular_ref_directives.asp",
		"PHP":                 "https://www.w3schools.com/php/default.asp",
		"Java":                "https://www.w3schools.com/java/"
	};

	// Call dropdownList with titles.
	dropdownList(id, buttonName, links);
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
	var links = {
		"1: Getting Started":            "https://www.youtube.com/watch?v=hXfigUyeHaY&list=PL6gx4Cwl9DGBYxWxJtLi8c6PGjNKGYGZZ&ab_channel=thenewboston",
		"2: Overview and Core Concepts": "https://www.youtube.com/watch?v=vc9n0j6-D2U&index=2&list=PL6gx4Cwl9DGBYxWxJtLi8c6PGjNKGYGZZ&ab_channel=thenewboston"
	};

	// Call dropdownList with titles.
	generateListItems(id, links);
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
	var links = {
		"12: Making Everything Pretty":          "https://www.youtube.com/watch?v=yNtIO4X6cag&index=12&list=PL081AC329706B2953&ab_channel=thenewboston",
		"13: Finishing The Layout":              "https://www.youtube.com/watch?v=tzAEGnBNAn0&index=13&list=PL081AC329706B2953&ab_channel=thenewboston",
		"14: Flexible Box Model":                "https://www.youtube.com/watch?v=xgYmccJ61eA&list=PL081AC329706B2953&index=14&frags=wn&ab_channel=thenewboston",
		"15: Styling the Header and Navigation": "https://www.youtube.com/watch?v=bi7ccKky8JU&list=PL081AC329706B2953&index=15&frags=wn&ab_channel=thenewboston"
	};

	// Call dropdownList with titles.
	generateListItems(id, links);
}

/**************************************************************************
* Use: Dropdown list for kudvenkat's tutorials.
* 
* Arguments: None
* 
* Return: None
***************************************************************************/
function kudvenkat() {
	// Set element ID.
	var id = "kudvenkat";

	var buttonName = "kudvenkat";

	// Create an array-like object for titles.
	var links = {
		"Angular modules and controllers": "https://www.youtube.com/watch?v=gWmOKmgnQkU&ab_channel=kudvenkat",
		"Controllers in AngularJS":        "https://www.youtube.com/watch?v=mW25S2tiCOM&ab_channel=kudvenkat"
	};

	// Call dropdownList with titles.
	dropdownList(id, buttonName, links);
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

	var buttonName = "Notes";

	// Create an array-like object for titles.
	var links = {
		"Html within Html":                         "https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file",
		"Angular Modules and Controllers in Files": "https://www.w3schools.com/angular/angular_modules.asp",
		"Multiple Modules in AngularJS":            "https://stackoverflow.com/questions/18512434/multiple-module-in-angularjs",                             
		"C++ if else shorthand":                    "https://stackoverflow.com/questions/24793916/shorthand-c-if-else-statement"                              
	};

	// Call dropdownList with titles.
	dropdownList(id, buttonName, links);
}
// General
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

function fibonacci(id, count) {
	// Create initial variables.
	var numbers = document.getElementById(id);
	var prev    = 0;
	var current = 1;
	var next    = 0;

	// Create list items for fibonacci numbers.
	for (var i = 0; i < count; i++) {
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

function initialization() {
	populateDropdowns();
	fibonacci("fibonacci", 50);
}

function populateDropdowns() {
	basicTutorials();
	buckyTutorials();
	miscNotes();
}

// W3Schools
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
function buckyTutorials() {
	buckyHTML();
	buckyAngularJS();
}

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
function miscNotes() {
	// Set element ID.
	var id = "misc-notes";
	// Create an array-like object for titles.
	var titles = {
			"https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file": "Html within Html"
	};

	// Call dropdownList with titles.
	dropdownList(id, titles);
}
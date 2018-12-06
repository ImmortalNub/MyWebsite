function initialization() {
	basicTutorials();
	buckyTutorials();
}

function basicTutorials() {
	// Set element ID.
	var id = "w3schools";
	// Create an array-like object for titles.
	var titles = {
			"https://www.w3schools.com/colors/colors_picker.asp": "Color Picker",
			"https://www.w3schools.com/css/default.asp":          "CSS",
			"https://www.w3schools.com/bootstrap/default.asp":    "Bootstrap",
			"https://www.w3schools.com/js/default.asp":           "JavaScript",
			"https://www.w3schools.com/php/default.asp":          "PHP"
	};

	// Call dropdownList with W3Schools titles.
	dropdownList(id, titles);
}

function buckyTutorials() {
	// Set element ID.
	var id = "bucky-tutorials";
	// Create an array-like object for titles.
	var titles = {
			"https://www.youtube.com/watch?v=yNtIO4X6cag&index=12&list=PL081AC329706B2953&ab_channel=thenewboston":          "12: Making Everything Pretty",
			"https://www.youtube.com/watch?v=tzAEGnBNAn0&index=13&list=PL081AC329706B2953&ab_channel=thenewboston":          "13: Finishing The Layout",
			"https://www.youtube.com/watch?v=xgYmccJ61eA&list=PL081AC329706B2953&index=14&frags=wn&ab_channel=thenewboston": "14: Flexible Box Model",
			"https://www.youtube.com/watch?v=bi7ccKky8JU&list=PL081AC329706B2953&index=15&frags=wn&ab_channel=thenewboston": "15: Styling the Header and Navigation"
	};

	// Call dropdownList with W3Schools titles.
	dropdownList(id, titles);
}

function dropdownList(id, titles) {
	// Create list items with a URL and a title.
	var link = document.getElementById(id);
	for (var url in titles) {
		// Create the list element
		var newLink = document.createElement("li");

		// Populate list element with an anchor with the url and a label.
		newLink.innerHTML = "<a href=" + url + " target='_blank' rel='noopener noreferrer'>"
								+ titles[url] +
							"</a>";
		link.appendChild(newLink);
	}
}
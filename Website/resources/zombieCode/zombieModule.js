/**************************************************************************
* Use: Creates a dropdown list containing items with links to other sources.
* 
* Arguments:
* 		string id: Target ID of the element to add list items. Must be a ul or ol.
* 		object links: An array-like object containing hyperlinks, with their labels as indexes.
		string buttonLabel: The label used for the button.
* 
* Return: None
***************************************************************************/
function dropdownList(id, buttonLabel, links) {

	// Place focus on the div tag.
	var dropdownDiv = document.getElementById(id);

	// Create a new id for the unordered list.
	var listId = id + "-list";

	// Create the button to contain the list later.
	var button = "<button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>"
	 					+ buttonLabel + " <span class='caret'></span>" +
	  		  	 "</button>";

	// Create the unordered list to contain the links.
	var list = "<ul id=" + listId + " class='dropdown-menu'></ul>";

	// Graft the button and list to the dropdown div.
	dropdownDiv.innerHTML += button + list;

	// Populate the unordered list with links.
	generateListItems(listId, links);
}

/**************************************************************************
* Use: Populates a list with labels and links to the sources.
* 	The list items will open a new tab when clicked on.
* 
* Arguments:
* 		string id: Target ID of the element to add list items. Must be a ul or ol.
* 		object links: An array-like object containing hyperlinks, with their labels as indexes.
* 
* Return: None
***************************************************************************/
function generateListItems(id, links) {
	// Place a focus on the list to be populated by id.
	var linkList = document.getElementById(id);

	// Append list items to the list that contain links.
	for (var link in links) {
		linkList.innerHTML += "<li><a href=" + links[link] + " target='_blank' rel='noopener noreferrer'>"
							       + link +
							  "</a></li>";
	}
}

function dropdownSubList(id, buttonLabel, links) {

	// Place focus on the div tag.
	// Create the button.
	// Create the unordered list to contain the sublists.

	/*
	<!-- TheNewBoston Tutorials -->
	<div id="the-new-boston" class="dropdown">
		<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
			Bucky's Tutorials <span class="caret"></span>
  		</button>

  		<ul class="dropdown-menu">
  			<!-- HTML5 -->
  			<div class="dropdown dropdown-sub">
				<button class="btn btn-purple">
					HTML5 <span class="caret"></span>
  				</button>
  				<ul id="bucky-html" class="dropdown-menu dropdown-menu-right"></ul>
			</div>
	
			<!-- AngularJS -->
			<div class="dropdown dropdown-sub">
				<button class="btn btn-purple">
					AngularJS <span class="caret"></span>
  				</button>
  				<ul id="bucky-angular-js" class="dropdown-menu dropdown-menu-right"></ul>
			</div>
		</ul>
	</div>
	*/
}
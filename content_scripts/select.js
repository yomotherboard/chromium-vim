var Select = {
	select_index: 0,
	selections: [],
	query: "",
	click_subquery: "",
	yank_subquery: "",
	scroll_to_select: false,
	center_point: 250,
	zero_point: false,
};

// helper for checkElement()
function rafAsync() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
    }
   );
}

// waits until a query selector finds a match
function checkElement(selector) {
    if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
    } else {
        return Promise.resolve(true);
    }
}

// set css style of selected DOM element
Select.style = function( styleCSS ) {
		old_style=document.querySelector("#cvim-select-style");

		if (old_style) {
			old_style.remove();
		}

		cvim_select_style =
			`<style id="cvim-select-style">
				.cvim-selected {
					` + styleCSS + `
					}
			</style>`;

		document.head.insertAdjacentHTML("beforeend", cvim_select_style);
};

// set the queryselector that aggregates the selection list
Select.selector = function( query_str ) {
		console.log("Select.selector called");
		if ( document.getElementsByClassName("cvim-selected")[0] ) {
			this.selections[this.select_index].classList.remove('cvim-selected');
		}
		
		this.select_index = 0;

		this.query = query_str;
		this.selections = document.querySelectorAll( query_str );

		checkElement( query_str )
		.then((element) => {
			console.info(element);
			console.log( query_str );

			this.selections = document.querySelectorAll( query_str );

			this.selections[this.select_index].classList.add('cvim-selected');
		});
};

// set a command to aggregate selection list instead of a query
Select.selectCommand = function( command_str ) {
		this.selections = eval(command_str);
};

// move through selection list by n items (negative is backward)
Select.move = function(n) {
		n = parseInt(n);
		next_index = this.select_index + n;

		target = this.selections[next_index];

		if (!target) { 
			// if target does not exist in selections[] check if new matches loaded
			this.selections = document.querySelectorAll( this.query )
			if (!target) {
				// if the target doesnt exist exit the function (end of list)
				return;
			}
		} 

		this.selections[this.select_index].classList.remove('cvim-selected');
		target.classList.add('cvim-selected');

		if (this.scroll_to_select) {
			console.log(target.getBoundingClientRect().y);
			window.scrollBy(0, target.getBoundingClientRect().y - parseFloat(this.center_point));
		}

		if (next_index == 0) {
			if (this.zero_point.length == 2) {
				if( (typeof(this.zero_point[0]) === "number") && (typeof(this.zero_point[1]) === "number") ) {
					scrollTo(this.zero_point[0], this.zero_point[1]);
				} else if ( typeof(this.zero_point) === "string" ) {
					document.querySelector(this.zero_point).scrollIntoView();
				} else if (typeof(this.zero_point) === "boolean") {
					if (this.zero_point == false) {
						// skip zero point movement
					}
				}
			}
		}

		this.select_index = next_index;
};

////
////	SUBSELECTORS
////
Select.click = function() {
		// if a string is passed as an argument use this to select clickable object
		if (arguments.length == 1) {
				this.selections[this.select_index].querySelector(arguments[0]).click();
		} else // if no string is passed use 'this.click_subquery' 
			{
				if (this.click_subquery === "") {
						this.selections[this.select_index].click();
				}
				this.selections[this.select_index].querySelector(this.click_subquery).click();
		}
};

Select.yank = function() {
		if (this.yank_subquery === "") {
			Clipboard.copy(this.selections[this.select_index].innerText);
			return null;
		}
		Clipboard.copy(this.selections[this.select_index].querySelector(this.yank_subquery).innerText);
};

////
////	ACTIONS
////
Select.dispatch = function() {
		if (arguments.length == 1) {
			this.selections[this.select_index].dispatchEvent(new Event(arguments[0]));
		}
		if (arguments.length == 2) {
			this.selections[this.select_index].querySelector(arguments[1]).dispatchEvent(new Event(arguments[0]));
		}
};

////
////	SELECTOR SETTINGS
////
// set whether the window scrolls to follow the selection
Select.scroll = function(scroll_bool) {
		this.scroll_to_select = scroll_bool;
};

// set center point for scroll to selection
Select.center = function(new_center) {
		this.center_point = new_center;
};

// set a css selector to query the currently selected element for the target clickable subelement
Select.clickSelector = function(click_subquery_str) {
		this.click_subquery = click_subquery_str;
};

Select.yankSelector = function(yank_subquery_str) {
		this.yank_subquery = yank_subquery_str;
};

// set the point [x, y] or DOM element to scroll to when select_index is 0 (or false to disable)
Select.setZero = function( arg ) {
		this.zero_point = arg;
};

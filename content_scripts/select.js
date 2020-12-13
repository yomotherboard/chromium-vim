var Select = {
	select_index: 0,
	selections: [],
	CSSselector: "",
	scroll_to_select: false,
	center_point: 250,
};

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

Select.selector = function( selector_string ) {
		this.CSSselector = selector_string;
		this.selections = document.querySelectorAll(selector_string);

		this.selections[this.select_index].classList.add('cvim-selected');
};

Select.move = function(n) {
		n = parseInt(n);

		if (!this.selections[this.select_index + n]) {
			return;
		}

		target = this.selections[this.select_index + n];

		this.selections[this.select_index].classList.remove('cvim-selected');
		target.classList.add('cvim-selected');

		if (this.scroll_to_select) {
			console.log(target.getBoundingClientRect().y);
			window.scrollBy(0, target.getBoundingClientRect().y - parseFloat(this.center_point));
		}

		this.select_index = this.select_index + n;
};

Select.scroll = function(scroll_bool) {
		this.scroll_to_select = scroll_bool;
};

Select.center = function(new_center) {
		this.center_point = new_center;
};

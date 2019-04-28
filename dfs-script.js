$(document).ready(function() {
	$(".header-tab").click(function() {
		$(".tab-page").hide();
		var id = $(this).attr("id");
		var page_id = "#" + id + "-page";
		$(page_id).fadeIn();
	})

	// const intersection = (arr1, arr2) => arr1.filter(x => arr2.includes(x));


	// a really ooof ((#ipas * #ft)sqred?) filtering logic. allows stacking.
	// @source Bev at Focus on Function Web Design
	var clickedFts = new Set();

	 $(".ft").click(function() {
		let currBg = $(this).css("background-color");
		let currFtID = $(this).attr("id");
		let currFt = currFtID.slice(1);

		$(".eng-active").css({"background": "#E2E0E0", "color": "black"});
		$(".eng-active").removeClass("selected");

		// if current bg of the ft button is light blue, aka unclicked
		if (currBg === "rgb(211, 223, 239)") {
			// change the ft button to clicked state 
			$(this).css({"background": "#4269A0", "color": "white"});
			// add current feature to the clickedFts set
			clickedFts.add(currFt);
		} else {
			// change color back to light blue
			$(this).css({"background": "#D3DFEF", "color": "black"});
			// remove current feature from the set
			clickedFts.delete(currFt);
		}

		// find ipas that have all features in clickedFts 
		let ftArray = Array.from(clickedFts);
		let selector = "." + ftArray.join(".");
		$(selector).addClass("selected");

		// change the color of selected ipas
		$(".selected").css({"background": "#AA5F5F", "color": "white"});
	}) 
})
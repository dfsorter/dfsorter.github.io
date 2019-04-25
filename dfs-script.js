$(document).ready(function() {
	$(".header-tab").click(function() {
		$(".tab-page").hide();
		var id = $(this).attr("id");
		var page_id = "#" + id + "-page";
		$(page_id).fadeIn();
	})

	// a really ooof ((#ipas * #ft)sqred?) filtering logic. allows stacking.
	/*let clickedFts = [];
	let numOfIPAs = $(".eng-active").length;
	let ipas = $(".eng-active").toArray();

	 $(".ft").click(function() {
		var currBg = $(this).css("background");
		// if current bg of the ft button is light blue, aka unclicked
		if (currBg === "#D3DFEF") {
			// change the ft button to clicked state 
			$(this).css({"background": "#4269A0", "color": "white"});
			// add this feature to the clickedFts array 
			var currFtID = $(this).attr("id");
			var currFt = "." + currFtID.slice(1);
			clickedFts.push(currFt);

			var numOfClicked = clickedFts.length;
			// find ipas that have all features in clickedFts 
			for (let i = 0; i < numOfIPAs; i++) {
				var currIPA = ipas[i];

			}
		}
		
	}) */
})
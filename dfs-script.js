$(document).ready(function() {
	$(".header-tab").click(function() {
		$(".tab-page").hide();
		var id = $(this).attr("id");
		var page_id = "#" + id + "-page";
		$(page_id).fadeIn();
	})

	// @source Bev at Focus on Function Web Design
	
	var clickedFts = new Set();
	var clickedSds = new Set();

	// ft -> sd mode = 0
	// sd -> ft mode = 1
	var ftOrSd = 0;

	 // feature -> sound filtering logic. allows stacking.
	 $(".ft").click(function() {

	 	var modeSwitch = false;

	 	// clear highlighted fts if site was in sd -> ft mode before
	  	// a feature is clicked
	 	if (ftOrSd === 1) {
	 		ftOrSd = 0;
	 		modeSwitch = true;

	 		$(".ft").css({"background": "#D3DFEF", "color": "black"});
			$(".ft").removeClass("fselected");
			if (clickedFts.size != 0) {
				clickedFts = new Set();
			}
			if (clickedSds.size != 0) {
				clickedSds = new Set();
			}
	 	}
	 	
		let currBg = $(this).css("background-color");
		let currFtID = $(this).attr("id");
		let currFt = currFtID.slice(1);

		$(".eng-active").css({"background": "#E2E0E0", "color": "black"});
		$(".eng-active").removeClass("selected");

		// if current bg of the ft button is light blue (aka unclicked) or there's been a mode switch
		if (currBg === "rgb(211, 223, 239)" || modeSwitch) {
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

		if (clickedFts.size != 0) {
			// find ipas that have all features in clickedFts 
			let ftArray = Array.from(clickedFts);
			let selector = "." + ftArray.join(".");
			$(selector).addClass("selected");

			// change the color of selected ipas
			$(".selected").css({"background": "#AA5F5F", "color": "white"});
		}
	}) 

	  // sound -> feature filtering logic. allows stacking
	  $(".sd").click(function() {

	  	var modeSwitch = false;

	  	// clear highlighted sds if site was in ft -> sd mode before
	  	// a sound is clicked
	  	if (ftOrSd === 0) {
	 		ftOrSd = 1;
	 		modeSwitch = true;

	 		$(".eng-active").css({"background": "#E2E0E0", "color": "black"});
			$(".eng-active").removeClass("selected");
			if (clickedFts.size != 0) {
				clickedFts = new Set();
			}
			if (clickedSds.size != 0) {
				clickedSds = new Set();
			}
	 	}

	  	let currBg = $(this).css("background-color");
		let currSd = $(this).attr("id");

		console.log(currBg);

	  	// reset fts
	  	$(".ft").css({"background": "#D3DFEF", "color": "black"});
		$(".ft").removeClass("fselected");

		// if current bg of the sd button is gray (aka unclicked) or there's been a mode switch
		if (currBg === "rgb(226, 224, 224)" || modeSwitch) {
			// change the sd button to clicked state 
			$(this).css({"background": "#AA5F5F", "color": "white"});
			// add current feature to the clickedSds set
			clickedSds.add(currSd);
		} else {
			// change color back to gray
			$(this).css({"background": "#E2E0E0", "color": "black"});
			// remove current feature from the set
			clickedSds.delete(currSd);
		}

		if (clickedSds.size != 0) {
			// set of each of selected sounds' features (encoded in their classes)
			let sdFts = new Array();
			let sdArray = Array.from(clickedSds);

			for (var i = 0; i < sdArray.length; i++) {
				sdFts.push($("#" + sdArray[i]).attr("class").split(/\s+/).slice(3));
			}

			// intersection of all sets in sdFts ('intersect' is a set of features as strings)
			let intersect = sdFts.reduce((a, b) => a.filter(c => b.includes(c)));

			for (var i = 0; i < intersect.length; i++) {
				$("#f" + intersect[i]).addClass("fselected");
			}

			// change the color of selected fts
			$(".fselected").css({"background": "#4269A0", "color": "white"});
		}
	})
})
$(document).ready(function() {
	$(".header-tab").click(function() {
		$(".tab-page").hide();
		var id = $(this).attr("id");
		var page_id = "#" + id + "-page";
		$(page_id).fadeIn();
	})
})
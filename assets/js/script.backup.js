// TAB
$(document).ready(function() {
    $(".tab").click(function(e) {
        e.preventDefault(), $(this).parent().addClass("select"), $(this).parent().siblings().removeClass("select");
        var t = $(this).attr("href");
        $(".page").not(t).css("display", "none"), $(t).fadeIn()
    })
});

// _blank to external link
function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (
			anchor.getAttribute("href") && ( 
			anchor.getAttribute("rel") == "external" || 
			anchor.getAttribute("rel") == "external nofollow" || 
			anchor.getAttribute("rel") == "nofollow external" )
			)
		anchor.target = "_blank";
	}
}
window.onload = function() {
	externalLinks();
}
$(function() {

	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
		$('#slideshow > div:first').fadeOut(100).next().fadeIn(10).end()
		}, 
		1000);

});

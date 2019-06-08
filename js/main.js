"use strict";
$(document).ready(function() {
	// Smooth scrolling
	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, speed);
		return false;
	});
	// Popover
	$('[data-toggle="popover"]').popover({
		trigger: 'hover'
	});
});
// LazyLoader
new LazyLoad();
/*
    Accordion
 */
var accordion = function(className, defaultActive) {
	var acc = document.querySelectorAll(className);
	/* Default active */
	var defActive = document.querySelector(defaultActive);
	defActive.nextElementSibling.style.maxHeight = defActive.nextElementSibling.scrollHeight + "px";
	defActive.classList.add("active");
	/* Action on click */
	for (var i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			for (var j = 0; j < acc.length; j++) {
				acc[j].nextElementSibling.style.maxHeight = null;
				acc[j].classList.remove('active');
			}
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			panel.style.maxHeight = panel.scrollHeight + "px";
		});
	}
}(".accordion__title", ".default");
/*
   End Accordion
 */
/*
Created by Zeuskx
Visit www.datoweb.com
You need jquery
*/
$(document).ready(function(){


//Menu navigation
$('.navbar-button').click(function() {

	$('.navbar-list').slideToggle(500, function(){
		if( $('.navbar-list').attr('data') == 'open' ){
		$('.navbar-list').removeAttr('data');
		$('.navbar-list').removeAttr('style');
		} else {
		$('.navbar-list').attr('data','open');
		}
	});

});


//Accordion
$('.accordion .panel-head').click(function() {	
		$('.accordion .panel-body').slideUp();
		var element = $(this).next();
		var estate = element.attr('style');

		if ( !estate || estate == 'display: none;') {
			element.slideDown();
		}
		else {
			element.slideUp();
		}			
});






});
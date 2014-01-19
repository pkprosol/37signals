$(document).ready(function(){

	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	var today = new Date();
	var day = weekday[today.getDay()];

	$('#greeting').html("Happy " + day +"!");
	$('#BasecampHover', '#HighriseHover', '#CampfireHover').hide(); // group these selectors with commas
	$('#BasecampLogo').mouseenter(function() {
		$('#tagline').hide();
		$('#BasecampHover').show();
	});
	$('#BasecampLogo').mouseleave(function() {
		$('#tagline').show();
		$('#BasecampHover').hide();
	});
	$('#HighriseLogo').mouseenter(function() {
		$('#tagline').hide();
		$('#HighriseHover').show();
	});
	$('#HighriseLogo').mouseleave(function() {
		$('#tagline').show();
		$('#HighriseHover').hide();
	});
	$('#CampfireLogo').mouseenter(function() {
		$('#tagline').hide();
		$('#CampfireHover').show();	
	});
	$('#CampfireLogo').mouseleave(function() {
		$('#tagline').show();
		$('#CampfireHover').hide();
	});
});
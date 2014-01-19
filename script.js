$(document).ready(function(){
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
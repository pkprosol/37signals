$(document).ready(function(){
	$('#BasecampHover').hide();
	$('#HighriseHover').hide();
	$('#CampfireHover').hide();
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
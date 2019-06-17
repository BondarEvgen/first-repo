$(document).ready(function() {
	// Mobile novigation

	$('.navigation-toggle').on('click', function(e){
		e.preventDefault();
		$('.navigation-list').toggleClass('.navigation-list-menu');
	});

});
var dossierImages = 'images/fianarantsoa/';

$(document).ready(function() {	/* Quand la page sera prête */
	$.ajax({
		type: 'POST',
		url: 'data/bus/fianarantsoa.json',
		dataType: 'json',
		success: function(resultats)
		{
			bus = resultats;
		}
	});

	$.ajax({
		type: 'POST',
		url: 'data/quartiers/fianarantsoa.json',
		dataType: 'json',
		success: function(resultats)
		{
			quartiers = resultats;
		}
	});
});


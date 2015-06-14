var dossierImages = 'images/antananarivo/';

$(document).ready(function() {	/* Quand la page sera prête */
	$.ajax({
		type: 'POST',
		url: 'data/bus/antananarivo.json',
		dataType: 'json',
		success: function(resultats)
		{
			bus = resultats;
		}
	});

	$.ajax({
		type: 'POST',
		url: 'data/quartiers/antananarivo.json',
		dataType: 'json',
		success: function(resultats)
		{
			quartiers = resultats;
		}
	});
});


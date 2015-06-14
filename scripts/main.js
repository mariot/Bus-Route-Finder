var bus;
var quartiers;

$('#bouton_chercher').bind('click', afficherTrajet);

function afficherTrajet() {
	$('#ultrajet').empty();
	$('#erreur').html('');

	if ($('#select_quartier_arrivee').val() != $('#select_quartier_depart').val()) {
		calculTrajet($('#select_quartier_depart').val(), $('#select_quartier_arrivee').val())
	}
}

function calculTrajet(departed, arriveed) {
	// for (var i = 0; i < quartiers.length; i++) {
		
	// }

	//console.log(departed, arriveed);

	//console.log(chercherLienSimple(departed, arriveed));


	var chemin = chercherLienSimple(departed, arriveed);
	var trajet = new Array();

	if (chemin.length == 0) {
		trajet = chercherLienDeuxBus(departed, arriveed);
	}
	else {
		trajet[trajet.length] = chemin;
	}

	//console.log(trajet);

	for (var j = 0; j < trajet.length; j++) {
		var trajetul = document.createElement("ul");
		var trajetulJQ = $(trajetul);
		trajetulJQ.attr("class", "artistlist");
		for (var i = 0; i < trajet[j].length; i++) {
			var busli = document.createElement("li");
			var busliJQ = $(busli);
			busliJQ.attr('class', 'artist cf');
			
			var alink = document.createElement("a");
			var alinkJQ = $(alink);
			//var onclickalinkJQ = 'afficherInfoBus('+trajet[j][i].idbus+', "'+trajet[j][i].nombus+'")';
			//alinkJQ.attr('href', '#/recherche');
			//alinkJQ.attr('onclick', onclickalinkJQ);
			
			var img = document.createElement("img");
			var imgJQ = $(img);
			imgJQ.attr('ng-src', dossierImages + trajet[j][i].nombus + '.jpg');
			imgJQ.attr('src', dossierImages + trajet[j][i].nombus + '.jpg');
			imgJQ.attr('alt', trajet[j][i].nombus);
			
			var infodiv = document.createElement("div");
			var infodivJQ = $(infodiv);
			infodivJQ.attr('class', 'info');
			
			var h2nom = document.createElement("h1");
			var h2nomJQ = $(h2nom);
			h2nomJQ.html('Bus ' + trajet[j][i].nombus);
			if (trajet[j][i].chemin == 'alternatif') {
				h2nomJQ.html('OU Bus ' + trajet[j][i].nombus);
			}
			
			var h3monter = document.createElement("h3");
			var h3monterJQ = $(h3monter);
			h3monterJQ.html('De ' + trajet[j][i].nomquartierdepart);
			
			var h3descendre = document.createElement("h3");
			var h3descendreJQ = $(h3descendre);
			h3descendreJQ.html('A ' + trajet[j][i].nomquartierarrivee);
			
			h2nomJQ.appendTo(infodivJQ);
			h3monterJQ.appendTo(infodivJQ);
			h3descendreJQ.appendTo(infodivJQ);
			imgJQ.appendTo(alinkJQ);
			infodivJQ.appendTo(alinkJQ);
			alinkJQ.appendTo(busliJQ);
			busliJQ.appendTo(trajetulJQ);
		}
		$(document.createElement("br")).appendTo($('#ultrajet'));
		trajetulJQ.appendTo($('#ultrajet'));
	}
}


function chercherLienSimple(departy, arriveey) {
	var resultat = new Array();
	var nombrebus = 0;
	for(var i = 0; i < bus.length; i++) {
		var itineraire = bus[i]['itineraire'];
		var departtrouve = false;
		var arriveetrouve = false;
		var bustrouve = false;
		
		for (var j = 0; j < itineraire.length; j++) {
			if (itineraire[j] == departy) {
				departtrouve = true;
			}
			
			if (itineraire[j] == arriveey) {
				arriveetrouve = true;
			}
			
			if (departtrouve == true && arriveetrouve == true && bustrouve == false) {
				bustrouve = true;

				var chemin = new Array();

				chemin.nombus = bus[i].nom;

				for (var l = 0; l < quartiers.length; l++) {
					if (quartiers[l].id == departy) {
						chemin.nomquartierdepart = quartiers[l].nom;
						break;
					}
				}

				for (var m = 0; m < quartiers.length; m++) {
					if (quartiers[m].id == arriveey) {
						chemin.nomquartierarrivee = quartiers[m].nom;
						break;
					}
				}

				if (nombrebus > 0) {
					chemin.chemin = "alternatif";
				}


				resultat[resultat.length] = chemin;

				nombrebus++;
				break;
			}
		}
	}
	return resultat;
}

function chercherLienDeuxBus(departyy, arriveeyy) {
	var resultat = new Array();
	for (var i = 0; i < quartiers.length; i++) {
		if (chercherLienSimple(departyy, quartiers[i].id).length != 0) {
			var primo = chercherLienSimple(departyy, quartiers[i].id);
			if (chercherLienSimple(quartiers[i].id, arriveeyy).length != 0) {
				var segondo = chercherLienSimple(quartiers[i].id, arriveeyy);
				
				var chemin = new Array();


				chemin[chemin.length] = primo[0];
				chemin[chemin.length] = segondo[0];
				
				resultat[resultat.length] = chemin;
				//break;
			}
		}
	}
	return resultat;
}


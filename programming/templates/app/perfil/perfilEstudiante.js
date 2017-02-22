$( document ).ready(function() {
    console.log( profiles );
    console.log( ejercicio );
    cargar(profiles, ejercicio);
});

function cargar(perfil, ejercicios){
	var numEjercicios = profiles.profileAlumno.ejercicios.length;
	var totalExp = 0;
	$(".numero").text(numEjercicios);
	if(numEjercicios >= 4)
	{
		for (x = numEjercicios; x > numEjercicios - 4; x--){
			var id = profiles.profileAlumno.ejercicios[x -1];
			for( y = 0; y < ejercicio.ejercicios.length; y++){
				var dificultad = ejercicio.ejercicios[y].nivel_dificultad;
				if(id == ejercicio.ejercicios[y].id)
				{
					$(".recent ul .row").append(
						$("<li>",{"id": id }).append(
							$("<div>",{"class":"col-md-8 col-xs-8"}).append(
								$("<a>",{"href":"#"}).text(ejercicio.ejercicios[y].titulo + ":")
							)
						)
					);
					difficulty(dificultad,id);
				}
			}
		}
	}
	else{
		for (x = numEjercicios; x > 0; x--){
			var id = profiles.profileAlumno.ejercicios[x -1];
			for( y = 0; y < ejercicio.ejercicios.length; y++){
				var dificultad = ejercicio.ejercicios[y].nivel_dificultad;
				if(id == ejercicio.ejercicios[y].id)
				{
					$(".recent ul .row").append(
						$("<li>",{"id": id }).append(
							$("<div>",{"class":"col-md-8 col-xs-8"}).append(
								$("<a>",{"href":"#"}).text(ejercicio.ejercicios[y].titulo + ":")
							)
						)
					);
					difficulty(dificultad,id);
				}
			}
		}
	}
		for(x = numEjercicios-1; x >= 0; x--){
			totalExp = totalExp + ejercicio.ejercicios[x].nivel_dificultad;	
		}
		lvlCalculator(totalExp);
	}

function difficulty(dificultad, id){
	var cont = 0;
	$("#"+ id).append(
		$("<div>",{"class":"col-md-4 col-xs-4"}));
	//Se agregan estrellas dependiendo de la dificultad
	for(z = 1; z<=dificultad; z++){
		$("#"+id+ " .col-md-4").append(
			$("<span>",{"class":"glyphicon glyphicon-star"})
			);
		cont++;
	}
	for(w = cont; w<5;w++){
	$("#"+ id +" .col-md-4").append(
		$("<span>",{"class":"glyphicon glyphicon-star-empty"})
		);
	}
}
function lvlCalculator(exp){
	var currentEXP = 0;
	var lvl = 1;
	for(x = exp; x >0; x--){
		currentEXP++;
		var nextlvl = 2 + Math.ceil(lvl * 0.25);
		if(currentEXP == nextlvl){
			currentEXP = 0;
			lvl++;
		}
	}
	console.log(lvl);
	console.log(currentEXP);
	console.log(nextlvl);
	console.log(100/nextlvl);
	$(".numero").text(lvl);
	$(".progress-bar").css("width",(100/nextlvl)+"%")
}

/*
var artistas = "https://api.spotify.com/v1/search?q="+artista+"&type=artist";
	$.getJSON(artistas, function(resp)
*/
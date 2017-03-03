$( document ).ready(function(){
	var tracks = "https://35c1b8c3.ngrok.io/api/v1/admin/reportes/estudiantes/mejores";
			$.getJSON(tracks, function(resp){
					for (x in resp){
						var paralelo = resp[x].curso.numero_paralelo;
						var student = [
										resp[x].estudiantes[0],
										resp[x].estudiantes[1],
										resp[x].estudiantes[2]
						]
						$(".container").append(
							$("<h2>",{"class":"text-center tit"}).text("Paralelo: ".concat(paralelo)))

						$(".container").append(
							$("<ul>",{"class":"nav navbar-nav col-md-12 sec par".concat(paralelo)}))

							generarEstudiante(	student[1],
												".container .par".concat(paralelo).concat(" .stud0"),
												"text-center",
												".par".concat(paralelo),
												"0"	)

							generarEstudiante(	student[0],
												".container .par".concat(paralelo).concat(" .stud1"),
												"text-center",
												".par".concat(paralelo),
												"1"	)

							generarEstudiante(	student[2],
												".container .par".concat(paralelo).concat(" .stud2"),
												"text-center",
												".par".concat(paralelo),
												"2"	)

					}
			});
})

function generarEstudiante(student, str, clase, idul, num){
	$(idul).append(
		$("<li>",{"class":"rank stud".concat(num)}))

	$(str).append(
		$("<img>",{"src":"http://placehold.it/80x80", "class":"img-responsive center-block photo"}))

	if(jQuery.isEmptyObject(student)){
		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Estudiante"))
		$(str).append(
			$("<p>",{"class": clase}).text("NA"))

		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Correo"))
		$(str).append(
			$("<p>",{"class": clase}).text("NA"))

		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Carrera"))
		$(str).append(
			$("<p>",{"class": clase}).text("NA"))

		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Puntaje"))
		$(str).append(
			$("<p>",{"class": clase}).text("NA"))


	}else{
		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Estudiante"))
		$(str).append(
			$("<p>",{"class": clase}).text(student.nombres.concat(" ").concat(student.apellidos)))

		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Correo"))
		$(str).append(
			$("<p>",{"class": clase}).text(student.correo))

		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Carrera"))
		$(str).append(
			$("<p>",{"class": clase}).text(student.carrera))

		$(str).append(
			$("<p>",{"class": clase.concat(" fuerte")}).text("Puntaje"))
		$(str).append(
			$("<p>",{"class": clase}).text(student.puntaje))
	}

	if(num == 0){
		$(str).append(
			$("<p>",{"class":"text-center silver"}).text("2"))
	}
	if(num == 1){
		$(str).append(
			$("<p>",{"class":"text-center gold"}).text("1"))
	}
	if(num == 2){
		$(str).append(
			$("<p>",{"class":"text-center bronze"}).text("3"))
	}
	
}
$(".delete").click(function(){

})
//Falta crear una opción para cancelar... que no sea reload.
$(".edit").click(function(){
	title = ".".concat("title".concat(event.target.id));
	titulo = $(title).text().trim();

	info = ".".concat("info".concat(event.target.id));
	info = $(info).html();
	info = info.replace(/\<br>/g,'\n')


	video = ".".concat("video".concat(event.target.id));
	video = $(video).attr('src');

	$("#m-id").val(event.target.id);
	$("#m-title").val(titulo);
	$("#m-desc").text(	info.trim()	);
	$("#m-video").val(video);
})


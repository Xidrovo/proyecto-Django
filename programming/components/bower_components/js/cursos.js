$("#descripcion").click(function(){
	desc = $(".edit-descripcion p").html();
	desc = desc.replace(/\<br>/g,'\n')

	$("#m-desc").val(desc.trim());
})

$("#requisitos").click(function(){
	desc = $(".edit-requisitos p").html();
	desc = desc.replace(/\<br>/g,'\n');

	$("#m-req").val(desc.trim());
})

$("#politicas").click(function(){
	desc = $(".edit-politicas p").html();
	desc = desc.replace(/\<br>/g,'\n');
	
	$("#m-pol").val(desc.trim());
})

$(".edit-syll").click(function(){
	ide = "#syll".concat(event.target.id)

	title = ide.concat(" h3")
	titulo = $(title).html()

	desc = ide.concat(" p")
	descripcion = $(desc).html()
	descripcion = descripcion.replace(/\<br>/g,'\n')

	$("#m-id").attr("value", event.target.id)
	$("#m-title-syll").val(titulo);
	$("#m-desc-syll").text( descripcion.trim() );
})
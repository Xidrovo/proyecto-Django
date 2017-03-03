$(".edit").click(function(){
	ide = "#syll".concat(event.target.id)

	title = $("#title".concat(event.target.id)).text()
	
	desc = $("#desc".concat(event.target.id)).html()
	descripcion = desc.replace(/\<br>/g,'\n');

	tags = $("#tags".concat(event.target.id)).text();

	$("#m-id").val(event.target.id);
	$("#m-title").val(title);
	$("#m-desc").val(descripcion.trim() );
	$("#m-tags").val(tags);

})
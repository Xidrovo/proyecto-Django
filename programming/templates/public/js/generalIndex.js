$("#entrar").click(function(){
	if($("#usr").val() == "user" && $("#pwd").val() == "user")
	{
		window.location.href = "../../indexStudent.html";
	}else if($("#usr").val() == "admin" && $("#pwd").val() == "admin")
	{
		window.location.href = "../../indexTeacher.html";
	}else
	{
		alert("usuario o contraseña equivocada");
	}
});
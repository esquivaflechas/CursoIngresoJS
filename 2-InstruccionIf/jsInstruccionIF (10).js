function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor((Math.random() * 10) + 1);
	if (nota == 9 || nota == 10) 
	{
		//document.getElementById('FormIngreso').value = "Excelente";	
		alert("Excelente.");
	} //Cierro if
	else
	{
		if (nota >= 4 && nota < 9) 
		{
			//document.getElementById('FormIngreso').value = "Aprobo";
			alert("Aprobo.");
		} //Cierro if
		else
		{
			//document.getElementById('FormIngreso').value = "Vamos, la proxima se puede";			
			alert("Vamos, la proxima se puede.");
		} //Cierro else
	} //Cierro else

}//FIN DE LA FUNCIÓN
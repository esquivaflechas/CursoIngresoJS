function Numero()
{
	
	var uno = parseInt(prompt("Ingrese un numero", ""));
	var dos = parseInt(prompt("Ingrese otro numero", ""));

	if (uno==dos)
	{
		var multiplicacion = uno*dos;
		document.write (multiplicacion);
	}
	else
	{
		if (uno>dos)
		{
			var resta = uno-dos;
			document.write(resta);
		}
		else
		{
			var suma = uno+dos;
			document.write(suma);
		}
	}



}
function diaSemana()
{

	var diaSemana = prompt("Ingrese un dia de la semana","");
	switch(diaSemana)
	{
		case "Sabado":
		case "sabado":
		case "Domingo":
		case "domingo":
		alert ("Es fin de semana");
		break;
		default: 
		alert("A trabajar");
		break;
	}
}
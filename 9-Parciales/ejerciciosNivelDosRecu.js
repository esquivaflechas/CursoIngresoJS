function numeros()
{

	var uno = parseInt(prompt("Ingrese un numero",""));
	var dos = parseInt(prompt("Ingrese otro numero",""));

	if ((uno+dos)==0)
	{
		document.write("La suma es cero");
	}
	else
	{
		if ( (uno + dos)>0 )
		{
			document.write("La suma es positiva");
		}
		else
		{
			document.write("La suma es negativa");
		}
	}
}

function mes()
{

	var mes =prompt("Por favor ingrese un mes","");
	switch(mes)
	{
		case "Diciembre":
		case "diciembre":
		alert("Se vienen las fiestas");
		break;
		case "Enero":
		case "enero":
		alert("Comienza el año");
		break;
		default:
		alert("No es Enero ni Diciembre");
		break;
	}
}
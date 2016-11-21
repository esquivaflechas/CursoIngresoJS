function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
	{	
		case "Enero":
			alert("Mes de 31 dias.");
			break;
		case "Febrero":
			alert("Mes de 28 dias.");
			break;
		case "Marzo":
			alert("Mes de 31 dias.");
			break;
		case "Mayo":
			alert("Mes de 31 dias.");
			break;
		case "Julio":
			alert("Mes de 31 dias.");
			break;
		case "Agosto":
			alert("Mes de 31 dias.");
			break;
		case "Octubre":
			alert("Mes de 31 dias.");
			break;
		case"Diciembre":
			alert("Mes de 31 dias.");
			break;
		default:
			alert("Mes de 30 dias.");
	} //Fin del switch



}//FIN DE LA FUNCIÓN
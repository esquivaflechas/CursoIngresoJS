/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	
/*
	var importe = parseInt(document.getElementById('importe').value);
	var descuento = ((importe*25)/100)-importe;
	document.getElementById('resultado').value = descuento;
*/
	var valor = parseInt(document.getElementById('importe').value);
	var descuento = valor-(valor*25/100);
	document.getElementById('resultado').value = descuento;

}
 
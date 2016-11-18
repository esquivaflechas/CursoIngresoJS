function Cuadrado()
{
	var lado = parseInt(document.getElementById('base').value);
	var superficie = lado*lado;
	alert("La superficie es de: "+superficie+" metros.");

}
function Descuento()
{

	var importe = parseInt(prompt("Por favor ingrese importe",""))=;
	var importeFinal = importe-(importe*25)/100;
	alert("El importe finale es: "+importeFinal);

}
function Promedio()
{

	var precioUno = parseInt(document.getElementById('primerPrecio').value)
	var precioDos = parseInt(document.getElementById('segundoPrecio').value)
	var precioTres = parseInt(document.getElementById('tercerPrecio').value)
	var suma = precioUno+precioDos+precioTres;
	var promedio = suma/3;
	alert("La suma es: "+suma+" y el promedio es: "+promedio);

}
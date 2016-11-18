/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerValor = parseInt(document.getElementById('PrecioUno').value);
	var segundoValor = parseInt(document.getElementById('PrecioDos').value);
	var tercerValor = parseInt(document.getElementById('PrecioTres').value);
	var suma = primerValor+segundoValor+tercerValor;
	alert("La suma de los valores es: "+suma);
}
function Promedio () 
{
	var primerValor = parseInt(document.getElementById('PrecioUno').value);
	var segundoValor = parseInt(document.getElementById('PrecioDos').value);
	var tercerValor = parseInt(document.getElementById('PrecioTres').value);
	var suma = primerValor+segundoValor+tercerValor;
	var promedio = suma/3;
	alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
	var primerValor = parseInt(document.getElementById('PrecioUno').value);
	var segundoValor = parseInt(document.getElementById('PrecioDos').value);
	var tercerValor = parseInt(document.getElementById('PrecioTres').value);
	var suma = primerValor+segundoValor+tercerValor;
	var precioFinal = ((suma*21)/100)+suma;
	alert("El precio final es: "+precioFinal);
}
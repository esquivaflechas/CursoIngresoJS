function Cuadrado()
{
	var ladoCuadrado = document.getElementById('baseCuadrado').value;
	var perimetro = ladoCuadrado*4;
	alert("El perimetro del cuadrado es: "+perimetro);

}
function Producto()
{

	var producto = parseInt(prompt("Por favor ingrese el importe del producto", ""));
	var importeFinal = ((producto*21)/100)+producto;
	alert("El importe final es: "+importeFinal);
}
function Terreno()
{

	 var largo = parseInt(document.getElementById('Largo').value);
	 var ancho = parseInt(document.getElementById('Ancho').value);
	 var perimetro = largo*2+ancho*2;
	 var alambre = perimetro*3;
	 alert("Se necesitan "+alambre+" metros de alambre.");

}
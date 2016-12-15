function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero>9 || numero<0)
	{
		var numero = prompt("El numero no esta entre 0 y 10. Por favor, fijese que el numero cumpla la condicion");
	}
	document.getElementById('Numero').value = numero;


}//FIN DE LA FUNCIÓN
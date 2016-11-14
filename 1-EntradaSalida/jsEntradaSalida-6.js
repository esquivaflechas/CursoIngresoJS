/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerValor = parseInt(document.getElementById('numeroUno').value); 
	var segundoValor = parseInt(document.getElementById('numeroDos').value);
	var resultado = primerValor + segundoValor;
	alert("La suma es: "+resultado);

}


/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerValor = parseInt(document.getElementById('numeroUno').value);
	var segundoValor = parseInt(document.getElementById('numeroDos').value);
	var resultado = primerValor+segundoValor;
	alert("La suma es: "+resultado);

}

function restar()
{
	var primerValor = document.getElementById('numeroUno').value;
	var segundoValor = document.getElementById('numeroDos').value;
	var resultado = primerValor-segundoValor;
	alert("La resta es: "+resultado);
	
}

function multiplicar()
{ 
	var primerValor = document.getElementById('numeroUno').value;
	var segundoValor = document.getElementById('numeroDos').value;
	var resultado = primerValor*segundoValor;
	alert("La multiplicacion es: "+resultado);
	
}

function dividir()
{
	var primerValor = document.getElementById('numeroUno').value;
	var segundoValor =document.getElementById('numeroDos').value;	var resultado = primerValor/segundoValor;
	alert("La division es: "+resultado);
	
}


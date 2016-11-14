/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*Display a prompt box which ask the user for her/his name, and output a message:
	var person = prompt("Please enter your name", "Harry Potter");*/
	/*'var' inicia una variable. 'var ='' le da un valor a la variable*/

	var nombre = prompt("Por favor ingrese su nombre", "nn");
	var apellido = prompt("Por favor ingrese su apellido", "");
	
	alert("Mi nombre es: "+nombre+" y su apellido es: "+apellido);

}


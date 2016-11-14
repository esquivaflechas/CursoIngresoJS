/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var miVariable;
	// '('elNombre');' toma el objeto
	// '('elNombre').value;' toma el valor del objeto
	miVariable = document.getElementById('elNombre').value;
	alert(miVariable);
}



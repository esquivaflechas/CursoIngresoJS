/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit = parseInt(document.getElementById('Temperatura').value);
	var temperaturaCentigrados = (temperaturaFahrenheit - 32)/1.8;
	alert(+temperaturaFahrenheit+" fahrenheit son "+temperaturaCentigrados+" centigrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados = parseInt(document.getElementById('Temperatura').value);
	var temperaturaFahrenheit = temperaturaCentigrados*1.8+32;
	alert(+temperaturaCentigrados+" centigrados son "+temperaturaFahrenheit+" fahrenheit");
}

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual'); //declaramos las variables
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => 
{
	boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
	//cuando hagamos click en un boton  se va a registrar un numero

});

botonesOperadores.forEach(boton => 
{
		boton.addEventListener('click', () => display.computar(boton.value));
});
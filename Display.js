class Display 
{
	constructor(displayValorAnterior, displayValorActual)
	{
		this.displayValorActual = displayValorActual;
		this.displayValorAnterior = displayValorAnterior; // estos son los elemnetos que queremos modificar
		this.calculadora = new Calculadora();
		this.tipoOperacion = undefined;
		this.valorActual = '';
		this.valorAnterior = ''; //estos valores son distintos de los "display", estos son los numeros que estamos guardando 
		this.signos = 
		{
			sumar: '+',
			dividir: '%',
			multiplicar: 'X',
			restar: '-',
		}
	}

	borrar()
	{
		this.valorActual = this.valorActual.toString().slice(0,-1); //con esto poedemos borrar los nuemeros impresos
		this.imprimirValores();
	}

	borrarTodo()
	{
		this.valorActual = '';
		this.valorAnterior = '';
		this.tipoOperacion = undefined;
		this.imprimirValores();
	}

	computar(tipo) 
	{
		this.tipoOperacion !== 'igual' && this.calcular();
		this.tipoOperacion = tipo;
		this.valorAnterior = this.valorActual || this.valorAnterior;
		this.valorActual = '';
		this.imprimirValores();
	}

	agregarNumero(numero) 
	{
		if(numero === '.' && this.valorActual.includes('.')) return //ponemos esto para que solo se pueda poner una vez el punto
		this.valorActual = this.valorActual.toString() + numero.toString(); //el num que se esta agregando sea igual al que recibimos
		this.imprimirValores();            //toString vuelve al valor un tipo string
	}

	imprimirValores() 
	{
		this.displayValorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
	} 	

	calcular()
	{
		const valorAnterior = parseFloat(this.valorAnterior); //parseFloat veulve al valor un tipo float
		const valorActual = parseFloat(this.valorActual); //parseFloat veulve al valor un tipo float

		if (isNaN(valorActual) || isNaN(valorAnterior)) return
		this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
	}
}
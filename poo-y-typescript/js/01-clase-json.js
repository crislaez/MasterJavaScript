var bicicleta = {
	color: 'rojo',
	modelo:'BMX',
	frenos: 'de disco',
	valocidadmaxima:'60km',
	cambiarcolor: function(nuevo_color){
			// bicicleta.color = nuevo_color;
			this.color = nuevo_color;
			console.log(this.color);
	}
};
bicicleta.cambiarcolor("Verde");
console.log(bicicleta);

bicicleta.color = "Amarillo";
console.log(bicicleta);

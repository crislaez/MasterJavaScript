// Clase(molde del objeto)
interface CamisetaBase{
	setColor(color);
	getColor();
}

// Decorador
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function(): void{
			console.log("camiseta estampada con el logo de:"+ logo);
		}
	}
}
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

	//propiedades(caracteristicas del objeto)
	// tabmein pueden ser privadas, pero entonces abajo no podriamos hacer camistas.color ya que para eos tieine que ser public
	public color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
	//metodos(funciones del objeto)
	public setColor(color){
		this.color = color;

	}
	public getColor(){
		return this.color;
	}
}

//Clase hija
class Sudadera extends Camiseta{
	public capucha: boolean;

	

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}
	getCapucha(): boolean{
		return this.capucha
	}
}
var SudaderaNike = new Sudadera();
console.log(SudaderaNike);
SudaderaNike.estampacion();
//var cam = new Camiseta("Gris","Tirantes","Nike","M",14);
//console.log(cam);
//var camisa = new Camiseta();
//camisa.setColor("blanca");
//console.log(camisa.getColor());

//var camisetas = new Camiseta();
//camisetas.color = "Rojo";
//camisetas.modelo = "Manga Larga";
//camisetas.marca = "Nike";
//camisetas.talla = "L";
//camisetas.precio = 20;

//console.log(camisetas);

//var cdos = new Camiseta();
//cdos.color = "Verde";
//cdos.modelo = "Manga Corta";
//cdos.marca = "Adidas";
//cdos.talla = "XL";
//cdos.precio = 20;

//console.log(cdos);
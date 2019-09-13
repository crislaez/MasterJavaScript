"usa strict"

// JSON - javascript object notation

//definir objeto json

var pelicula = {
	titulo: "Batmar vs Superman",
	year: 2017,
	pais: "Estados Unidos"
};


// pelicula.titulo = "Superman Begin";
// console.log(pelicula);
// console.log(pelicula.titulo);

var peliculas = [
	{titulo: "la verdad duele", year: 2016, pais: "Francia"},
	{titulo: "Avenger endgame", year: 2019, pais: "Estados Unidos"},
	pelicula
];
console.log(peliculas);

var div = document.querySelector("#peliculas");
var valor;

for(valor in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[valor].titulo+", "+peliculas[valor].year+", "+peliculas[valor].pais);
	div.append(p);

}
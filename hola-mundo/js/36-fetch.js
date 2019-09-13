"use strict"

// fetch (ajax) y peticiones a servicios / apis rest

// var usuarios = [];
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(data => {
// 		usuarios = data;
// 		console.log(usuarios);
// });

// var usuarios = [];
// fetch("https://reqres.in/api/users?page=2")
// .then(function (data){
// 		return data.json()
// })
// .then(users => {
// 		usuarios = users.data;
// 		console.log(usuarios);
// });

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");
var loading = document.querySelector(".loading");




// getUsuarios()//una promesa
// .then(data => data.json())//recoge los datos y devuelve una promesa
// .then(users => {//capturmos los datos que nos devueve
// 		listadousuarios(users.data);//mostramos lo que nos devuelve

		
// 		return getinfo();//llamar a otra promesa y devolvemos
		
// })
// .then(data => {//utilizamos la promesa getinfo despues d elos 3 segundos
// 	div_profesor.innerHTML = data;//lo metemos dentro del html

// 	return getJanet();//llamamos a otro fetch otra promesa
// })

// .then(data => data.json())//recogemos los datos y devolvemos
// .then(user =>{//se  ejecuta otra primesa
// 	listadojanet(user.data);

	
// })
// .catch(error =>{
// 	console.log();
// });


try{
	getUsuarios()//coger direccion dato UNO
	.then(data => data.json())//devolder dato UNO del api
	.then(users => {
			listadousuarios(users.data);//y se MUESTRAN aqui datos UNO

			return getJanet();//coge direccion dato DOS
			
	})
	.then(data => data.json())//devuelve los datos o direccion dato DOS
	.then(user =>{
		listadojanet(user.data);//y se MUESTRAN aqui dato DOS

		return getinfo();//devuelve los datos o direccion dato TRES
	})
	.then(data => {
		mostrarprofesor(data);//y se MUESTRAN aqui dato TRES
});
}catch(error ){
	console.log(error);
};




//----------------------------------------------------------------
function getUsuarios(){
	return fetch("https://reqres.in/api/users?page=2");
}
function getJanet(){
	return fetch("https://reqres.in/api/users/2");
}
function listadousuarios(usuarios){
	usuarios.map((user, i) =>{
			loading.style.display = "none";
			let nombre = document.createElement("h2");

			nombre.innerHTML = i+ user.first_name+" "+user.last_name;

			div_usuarios.appendChild(nombre);
		});

}

function listadojanet(usuarios){

		document.querySelector("#janet .loading").style.display = "none";
		var avatar = document.createElement("img");
		var nombre = document.createElement("h2");
		nombre.innerHTML = "1 "+usuarios.first_name+"  "+usuarios.last_name;
		avatar.src = usuarios.avatar;
		avatar.width = "100";
		div_janet.append(nombre);
		div_janet.append(avatar);
				
		
}

function getinfo(){

	var profesor = {
		nombre: "Cris",
		apellido: "Laez",
		url: "http://crislaez.es"
	};

	return new Promise((resolve, reject) =>{

		var profesor_string ="";
		setTimeout(function(){
			profesor_string = JSON.stringify(profesor);

			if(typeof profesor_string !="string" || profesor_string ==""){
			return reject("error");
		}

		return resolve(profesor_string);
		}, 3000);

		
		
	});


	
}

function mostrarprofesor(data){

div_profesor.innerHTML = data;
};
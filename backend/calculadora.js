'use strict'
var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = 
`
La suma es: ${numero1 +numero2}
La resta es: ${numero1 -numero2}
La Multiplicacion es: ${numero1 *numero2}
La Division es: ${numero1 /numero2}
 `;
 console.log(plantilla);

console.log(params);
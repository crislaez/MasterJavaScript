"use strict"

var num1 = 0;


do{ 

 num1 = parseInt(prompt("introduce un numero"));


}while(isNaN(num1));

alert(num1);


if(num1 %2 == 0){
 document.write("<h1>"+" el numero: "+num1+" es PAR "+"</h1>");
alert("es par");

}
else{
 document.write("<h1>"+" el numero: "+num1+" es IMPAR "+"</h1>");
alert("es impar");
}
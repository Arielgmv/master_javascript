'use strict'
//Pruebas con let y var
//prueba con var
var numero=40;
console.log(numero);//valor 40
if(true){
    var numero=50;
    console.log(numero);//valor 50
}
console.log(numero);//valor 50

//prueba con let
var texto="Curso JS";
console.log(texto);//valor JS
if(true){
   let texto="Curso larevel 5";
   console.log(texto);//valor laravel 5
}
console.log(texto);//valor JS

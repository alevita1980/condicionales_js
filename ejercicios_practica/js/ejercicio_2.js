"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

if(texto1 > texto2){
    alert("La palabra" + texto1 + "es mayor que" + texto2);
}else{
    alert("La palabra" + texto2 + "es mayor que" + texto1);
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

if(copiaTexto1 === texto1){
    alert("La palabra" + copiaTexto1 + "es igual" + texto1);
}else{
    alert("La palabra" + copiaTexto1+ "no es igual" + texto1);
}

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda

if(copiaTexto1 != texto2){
    alert("La palabra" + copiaTexto1 + "es distinta" + texto2);
}else{
    alert("La palabra" + copiaTexto1+ "es igual" + texto2);
}
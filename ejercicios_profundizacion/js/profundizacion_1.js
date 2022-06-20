"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

const numero1=parseInt(prompt('Ingrese el primer numero:\n'));
const numero2=parseInt(prompt('Ingrese el segundo numero:\n'));

if ((numero1 - numero2)=== 0){
    alert("El resultado es un numero igual a 0");
}else if((numero1 - numero2)> 0){
    alert("El resultado es un numero positivo");
}else{
    alert("El resultado es un numero negativo");
}


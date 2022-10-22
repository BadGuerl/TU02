// Ejercicio 1

// Cree una función de flecha para calcular si un número es par o impar (TRUE si es par o FALSE si es impar). Indica en el nivel de información de la consola si 7, 104 y 2760 son pares o impares 
// (salida sólo verdadera o falsa).

// function esPar(a) {
//   let result;
//   if (a%2==0) {
//     result = 'true';
//   } else {
//     result = 'false';
//   }
//   return result;
// }

// const esPar = (a) => (a % 2 == 0) ? 'true' : 'false'

const esPar = (a) => a % 2 == 0

console.log(esPar(7));
console.info(esPar(104));
console.warn(esPar(2760));
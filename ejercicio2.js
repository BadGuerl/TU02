// Reescríbalo, para realizar lo mismo, pero sin la sentencia if, en una sola línea.


// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }


const checkAgeOr = (age) => age > 18 || age == 18

console.log(checkAgeOr(17));
console.log(checkAgeOr(19));
console.log(checkAgeOr(18));
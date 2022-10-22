// Usted quiere tener una función de operador genérico, que realice una operación entre 2 números.
// Por ejemplo, la función operadora debe ser capaz de multiplicar o sumar o dividir esos dos números.
// Utilice funciones de devolución de llamada para resolver el ejercicio.


sumar(5, 6, (resultado) => {
  console.log(resultado);
  return 0;
});

function alertResult(resultado) {
  alert(resultado);
}

function sumar(a, b, show) {
  console.log(show);
  const resultado = a + b;
  show(resultado);
}

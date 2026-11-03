//código independiente, si es necesario
console.log('Entrando en utilidades.js');
//funciones
let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1,num2) => num1 * num2;
let dividir = (num1, num2) => num1/num2;

//para exportar funciones es necesario decirlo explícitamente
module.exports = {
 sumar: sumar,
 restar: restar,
 multiplicar:multiplicar,
 dividir:dividir
};

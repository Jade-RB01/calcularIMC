const modulo = require ("./calcularIMC")

const pesoUsuario = 80;
const alturaUsuario = 1.55;
const imcUsuario = modulo.moduloCalcularIMC1(pesoUsuario, alturaUsuario);

//imcUsuario.toFixed(2);

//para imprimir a nivel consola, sin esto no lo imprime
console.log("El valor del IMC es: " + imcUsuario.toFixed(2));
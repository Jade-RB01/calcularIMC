function calcularIMC(peso, altura){
    const imc = peso / (altura * altura);
    return imc;
}

//exportacion para la llamadafuncion
module.exports.moduloCalcularIMC2=calcularIMC;

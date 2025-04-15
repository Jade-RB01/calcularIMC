const modulo= require("./calcularIMC2") 
const pesoUsuario = 99;
const alturaUsuario = 1.53;
const imcUsuario = modulo.moduloCalcularIMC2(pesoUsuario, alturaUsuario);

//CONDICIONAL PARA VALORES DE IMC
if(imcUsuario<18.5)
{
    console.log("El valor del IMC es: (azul claro) " + imcUsuario.toFixed(2) + " siendo peso insuficiente");
}

    else if(imcUsuario>18.5 && imcUsuario<24.9)
    {
        console.log("El valor del IMC es: (verde) " + imcUsuario.toFixed(2) + " siendo saludable");
    }

        else if(imcUsuario>25 && imcUsuario<29.9)
        {
            console.log("El valor del IMC es: (amarillo) " + imcUsuario.toFixed(2) + " siendo sobrepeso");
        }

            else if(imcUsuario>30 && imcUsuario<39.9)
            {
                console.log("El valor del IMC es: (rojo) " + imcUsuario.toFixed(2) + " siendo obesidad");
            }
                else if(imcUsuario>40)
                {
                        console.log("El valor del IMC es: (morado) " + imcUsuario.toFixed(2) + " siendo obesidad extrema");
                }

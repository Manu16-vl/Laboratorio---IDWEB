function operacionesMatematicas() {
    const sumar=(x, y) => x+y;
    const restar=(x, y) => x-y; 
    const multiplicar=(x, y) => x*y;
    const dividir=(x, y) => y !==0 ? x/y : "Error";

    return { sumar, restar, multiplicar, dividir };
}
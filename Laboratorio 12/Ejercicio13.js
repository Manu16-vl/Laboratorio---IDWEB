function crearContador(valor) {
    let valorInicial=valor;

    const incrementar= () => ++valor;
    const resetear= () => { valor=valorInicial; return valor;}; 

    return { incrementar, resetear };
}
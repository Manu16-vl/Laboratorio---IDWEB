function crearSecuencia(inicio, paso) {
    let numero=inicio;
    const secuencia = () => { 
        const actual=numero;
        numero+=paso; 
        return numero
    };
    return secuencia; 
}
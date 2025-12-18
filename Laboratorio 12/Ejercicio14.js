function acumulador(valorInicial) {
    let valorActual=valorInicial;
    const sumar= (valor) => { valorActual+=valor; return valorActual; };  

    return sumar; 
}
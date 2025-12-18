function filtrarArreglo(arr, callback) {
    const resultado=[];

    for (let elemento of arr) {
        if (callback(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
function media(...numeros) {
    if (numeros.length===0) return 0;
    const suma = numeros.reduce((acum, n) => acum + n, 0);
    return suma/numeros.length; 
}
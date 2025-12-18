function procesarTexto(texto) {
    function limpiarEspacios(texto){
        return texto.replace(/\s+/g,"").trim();
    }
    function contarPalabras(texto){
        if (texto.trim()==="") return 0;
        return texto.trim().split(/\s+/).length;
    }

    let textoLimpio=limpiarEspacios(texto);
    let cantidadPalabras=contarPalabras(texto);
    
    console.log(`->Texto sin espacios: ${textoLimpio}`);
    console.log(`N° de palabras: ${cantidadPalabras}`);
}
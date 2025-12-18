const calcularDescuento=function(precio,porcentaje){
    let descuento=(100-porcentaje)/100;
    return precio*descuento;
}
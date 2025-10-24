//ingreso de datos 
let a=parseFloat(prompt("Ingrese el primer lado"));
let b=parseFloat(prompt("Ingrese el segundo lado"));
let c=parseFloat(prompt("Ingrese el tercer lado"));
//comprobamos si cumple ser un triangulo 
if (a+b>c && b+c>a && a+c>b){
    console.log("El triangulo sí existe"); 
    if(a==b && b==c) {
        console.log("El triángulo es equilatero");
    }else if (a!==b && b!==c);{
        console.log("El triángulo es escaleno");
    } if (a!==b && b==c) {
        console.log("El triángulo es isósceles");
    }else if (a==b && b!==c) {
        console.log("El triángulo es isósceles");
    }
}
 
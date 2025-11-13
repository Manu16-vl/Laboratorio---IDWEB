let presupuesto = parseFloat(prompt("Ingrese su presupuesto total:"));
let total = 0;
let continuar = true;
while (continuar) {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  if (total + precio > presupuesto) {
    alert("⚠️ No puede agregar este producto, supera su presupuesto.");
    continuar = false;
  } else {
    total += precio;
    let respuesta = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
    if (respuesta !== "s") {
      continuar = false;
    }
  }
}
alert("💰 Total parcial: " + total.toFixed(2));
let mensajeDescuento = "";
let totalFinal = total;
if (total > 100) {
  mensajeDescuento = "Tiene un descuento del 10%";
  totalFinal = total * 0.9;
} else if (total >= 50) {
  mensajeDescuento = "Gana un cupón de 5%";
  totalFinal = total * 0.95;
} else {
  mensajeDescuento = "No aplica descuento";
}
alert(`${mensajeDescuento}\n💸 Total final a pagar: ${totalFinal.toFixed(2)}`);
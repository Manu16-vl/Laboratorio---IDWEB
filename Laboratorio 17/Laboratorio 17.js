console.log("\nEjercicio 16:");
  function procesarListaPromesa(numeros) {
    return new Promise((resolve) => {
      let pendientes = numeros.length;
      if (pendientes === 0) {
        resolve("Proceso completado (lista vacía)");
        return;
      }

      numeros.forEach((num) => {
        const tiempo = 500 + Math.floor(Math.random() * 1000);
        setTimeout(() => {
          console.log(`Promesa Ej 16 -> Procesando ${num}...`);
          pendientes--;
          if (pendientes === 0) {
            resolve("Proceso completado (promesa)");
          }
        }, tiempo);
      });
    });
  }
  procesarListaPromesa([10, 20, 30])
    .then((mensajeFinal) => {
      console.log("Promesa Ej 16:", mensajeFinal);
    });
      console.log("\nEjercicio 20:");
  async function ejecutarEj20() {
    const mensaje = await procesarListaPromesa([100, 200, 300, 400]);
    console.log("Async/Await Ej 20:", mensaje);
  }

  ejecutarEj20();


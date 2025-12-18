// ======================================================
// LABORATORIO 16 – Eventos y JSON
// Alumno: [TU NOMBRE AQUÍ]
// Colaboración: ChatGPT (IA)
// Ejercicios 3 al 22
// ======================================================

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ====================================================
  // EJERCICIO 3
  // Cambiar el texto de un párrafo al hacer clic en un botón
  // ====================================================
  const parrafo = document.getElementById("parrafo");
  const btnCambio = document.getElementById("btnCambio");

  if (btnCambio && parrafo) {
    btnCambio.addEventListener("click", () => {
      parrafo.textContent = "Texto cambiado desde JavaScript al hacer clic.";
      console.log("Ej 3 -> Texto del párrafo modificado.");
    });
  }

  // ====================================================
  // EJERCICIO 4
  // Cambiar estilo del párrafo (color / tamaño) en otro clic
  // ====================================================
  if (btnCambio && parrafo) {
    btnCambio.addEventListener("dblclick", () => {
      parrafo.style.color = "blue";
      parrafo.style.fontSize = "1.5rem";
      parrafo.style.fontWeight = "bold";
      console.log("Ej 4 -> Estilo del párrafo modificado (doble clic).");
    });
  }

  // ====================================================
  // EJERCICIO 5
  // Botón para activar/desactivar modo oscuro
  // ====================================================
  const btnModo = document.getElementById("btnModo");
  if (btnModo) {
    btnModo.addEventListener("click", () => {
      document.body.classList.toggle("oscuro");
      console.log("Ej 5 -> Modo oscuro alternado.");
    });
  }

  // ====================================================
  // EJERCICIO 6
  // Contador interactivo con + y −
  // ====================================================
  const btnMas = document.getElementById("btnMas");
  const btnMenos = document.getElementById("btnMenos");
  const spanContador = document.getElementById("contador");
  const msgContador = document.getElementById("msgContador");

  let contador = 0;
  if (spanContador) spanContador.textContent = contador;

  if (btnMas) {
    btnMas.addEventListener("click", () => {
      contador++;
      spanContador.textContent = contador;
      msgContador.textContent = `Valor actual: ${contador}`;
      console.log("Ej 6 -> Contador incrementado:", contador);
    });
  }

  if (btnMenos) {
    btnMenos.addEventListener("click", () => {
      contador--;
      spanContador.textContent = contador;
      msgContador.textContent = `Valor actual: ${contador}`;
      console.log("Ej 6 -> Contador decrementado:", contador);
    });
  }

  // ====================================================
  // EJERCICIO 7
  // Lista dinámica: agregar y eliminar ítems
  // ====================================================
  const inputItem = document.getElementById("inputItem");
  const btnAgregar = document.getElementById("btnAgregar");
  const btnEliminar = document.getElementById("btnEliminar");
  const ulLista = document.getElementById("lista");

  if (btnAgregar && inputItem && ulLista) {
    btnAgregar.addEventListener("click", () => {
      const texto = inputItem.value.trim();
      if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        ulLista.appendChild(li);
        console.log("Ej 7 -> Ítem agregado:", texto);
        inputItem.value = "";
      }
    });
  }

  if (btnEliminar && ulLista) {
    btnEliminar.addEventListener("click", () => {
      if (ulLista.lastElementChild) {
        console.log("Ej 7 -> Ítem eliminado:", ulLista.lastElementChild.textContent);
        ulLista.removeChild(ulLista.lastElementChild);
      }
    });
  }

  // ====================================================
  // EJERCICIO 8
  // Validación básica de formulario (nombre y correo)
  // ====================================================
  const formValidar = document.getElementById("formValidar");
  const inputNombre = document.getElementById("nombre");
  const inputCorreo = document.getElementById("correo");

  if (formValidar && inputNombre && inputCorreo) {
    formValidar.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = inputNombre.value.trim();
      const correo = inputCorreo.value.trim();

      if (nombre === "" || correo === "") {
        alert("Por favor, llena todos los campos.");
        console.log("Ej 8 -> Falló validación: campos vacíos.");
        return;
      }

      if (!correo.includes("@")) {
        alert("Correo inválido, debe contener '@'.");
        console.log("Ej 8 -> Correo inválido.");
        return;
      }

      alert("Formulario enviado correctamente (simulado).");
      console.log("Ej 8 -> Formulario válido. Nombre:", nombre, "Correo:", correo);
    });
  }

  // ====================================================
  // EJERCICIO 9
  // Galería: al hacer clic en miniatura, cambiar la imagen grande
  // ====================================================
  const miniaturas = document.querySelectorAll(".miniatura");
  const imgGrande = document.getElementById("imagen-grande");

  if (miniaturas && imgGrande) {
    miniaturas.forEach((mini) => {
      mini.addEventListener("click", () => {
        imgGrande.src = mini.src;
        console.log("Ej 9 -> Cambiando imagen grande a:", mini.src);
      });
    });
  }

  // ====================================================
  // EJERCICIO 10
  // Generar tabla desde arreglo (JSON simulada)
  // ====================================================
  const btnTabla = document.getElementById("btnTabla");
  const contenedorTabla = document.getElementById("contenedorTabla");

  const datosTabla = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "María", edad: 22 }
  ];

  if (btnTabla && contenedorTabla) {
    btnTabla.addEventListener("click", () => {
      contenedorTabla.innerHTML = "";
      const tabla = document.createElement("table");
      const thead = document.createElement("thead");
      const trHead = document.createElement("tr");
      const thNombre = document.createElement("th");
      const thEdad = document.createElement("th");
      thNombre.textContent = "Nombre";
      thEdad.textContent = "Edad";
      trHead.appendChild(thNombre);
      trHead.appendChild(thEdad);
      thead.appendChild(trHead);
      tabla.appendChild(thead);

      const tbody = document.createElement("tbody");
      datosTabla.forEach((item) => {
        const tr = document.createElement("tr");
        const tdN = document.createElement("td");
        const tdE = document.createElement("td");
        tdN.textContent = item.nombre;
        tdE.textContent = item.edad;
        tr.appendChild(tdN);
        tr.appendChild(tdE);
        tbody.appendChild(tr);
      });
      tabla.appendChild(tbody);
      contenedorTabla.appendChild(tabla);
      console.log("Ej 10 -> Tabla generada dinámicamente.");
    });
  }

  // ====================================================
  // EJERCICIO 11
  // Delegación de eventos en una lista
  // ====================================================
  const listaDelegacion = document.getElementById("listaDelegacion");
  if (listaDelegacion) {
    listaDelegacion.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        alert(`Hiciste clic en: ${e.target.textContent}`);
        console.log("Ej 11 -> Click en LI:", e.target.textContent);
      }
    });
  }

  // ====================================================
  // EJERCICIO 12
  // Animación con CSS: mover y reiniciar un cuadrado
  // ====================================================
  const cuadrado = document.getElementById("cuadrado");
  const btnMover = document.getElementById("btnMover");
  const btnReiniciar = document.getElementById("btnReiniciar");

  if (cuadrado && btnMover && btnReiniciar) {
    btnMover.addEventListener("click", () => {
      cuadrado.classList.add("mover");
      console.log("Ej 12 -> Cuadrado movido.");
    });

    btnReiniciar.addEventListener("click", () => {
      cuadrado.classList.remove("mover");
      console.log("Ej 12 -> Cuadrado reiniciado.");
    });
  }

  // ====================================================
  // EJERCICIO 13
  // CRUD sencillo de usuarios (array + tabla)
// ====================================================
  const crudNombre = document.getElementById("crudNombre");
  const crudEdad = document.getElementById("crudEdad");
  const crudAgregar = document.getElementById("crudAgregar");
  const crudTabla = document.getElementById("crudTabla");

  let usuarios = [];

  function renderCRUD() {
    if (!crudTabla) return;
    crudTabla.innerHTML = "";
    usuarios.forEach((u, index) => {
      const tr = document.createElement("tr");

      const tdNombre = document.createElement("td");
      tdNombre.textContent = u.nombre;

      const tdEdad = document.createElement("td");
      tdEdad.textContent = u.edad;

      const tdAcciones = document.createElement("td");
      const btnBorrar = document.createElement("button");
      btnBorrar.textContent = "Eliminar";
      btnBorrar.dataset.index = index;

      tdAcciones.appendChild(btnBorrar);
      tr.appendChild(tdNombre);
      tr.appendChild(tdEdad);
      tr.appendChild(tdAcciones);
      crudTabla.appendChild(tr);
    });
  }

  if (crudAgregar && crudNombre && crudEdad) {
    crudAgregar.addEventListener("click", () => {
      const nombre = crudNombre.value.trim();
      const edad = parseInt(crudEdad.value.trim());

      if (!nombre || isNaN(edad)) {
        alert("Ingresa nombre y edad válidos.");
        return;
      }
      usuarios.push({ nombre, edad });
      renderCRUD();
      crudNombre.value = "";
      crudEdad.value = "";
      console.log("Ej 13 -> Usuario agregado:", nombre, edad);
    });
  }

  if (crudTabla) {
    crudTabla.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const index = parseInt(e.target.dataset.index);
        console.log("Ej 13 -> Usuario eliminado:", usuarios[index]);
        usuarios.splice(index, 1);
        renderCRUD();
      }
    });
  }

  // ====================================================
  // EJERCICIO 14 y 15
  // Convertir objeto a JSON y luego parsearlo
  // ====================================================
  const btnJSON1 = document.getElementById("btnJSON1");
  const jsonToObj = document.getElementById("jsonToObj");

  if (btnJSON1 && jsonToObj) {
    btnJSON1.addEventListener("click", () => {
      const persona = {
        nombre: "Manuel",
        edad: 21,
        carrera: "Ingeniería de Sistemas"
      };

      // 14: a JSON
      const jsonStr = JSON.stringify(persona);
      console.log("Ej 14 -> Objeto a JSON:", jsonStr);

      // 15: de JSON a objeto
      const objRecuperado = JSON.parse(jsonStr);
      jsonToObj.textContent = `Nombre: ${objRecuperado.nombre}, Edad: ${objRecuperado.edad}, Carrera: ${objRecuperado.carrera}`;
      console.log("Ej 15 -> JSON parseado a objeto:", objRecuperado);
    });
  }

  // ====================================================
  // EJERCICIO 16
  // Mostrar lista de productos a partir de un arreglo de objetos
  // ====================================================
  const listaProductos = document.getElementById("listaProductos");
  const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 120 }
  ];

  if (listaProductos) {
    productos.forEach((prod) => {
      const li = document.createElement("li");
      li.textContent = `${prod.nombre} - S/. ${prod.precio}`;
      listaProductos.appendChild(li);
    });
    console.log("Ej 16 -> Lista de productos generada desde JSON.");
  }

  // ====================================================
  // EJERCICIO 17
  // Mostrar datos de un usuario almacenado en localStorage
  // ====================================================
  const pUsuarioLS = document.getElementById("usuarioLS");

  if (pUsuarioLS) {
    let usuarioLS = localStorage.getItem("usuarioLS");
    if (!usuarioLS) {
      const usuarioDefecto = { nombre: "Invitado", rol: "visitante" };
      localStorage.setItem("usuarioLS", JSON.stringify(usuarioDefecto));
      usuarioLS = JSON.stringify(usuarioDefecto);
      console.log("Ej 17 -> Usuario por defecto guardado en localStorage.");
    }

    const objUsuario = JSON.parse(usuarioLS);
    pUsuarioLS.textContent = `Usuario LS: ${objUsuario.nombre} (${objUsuario.rol})`;
    console.log("Ej 17 -> Leyendo usuario desde localStorage:", objUsuario);
  }

  // ====================================================
  // EJERCICIO 18
  // Mostrar una tabla de libros usando JSON
  // ====================================================
  const divLibros = document.getElementById("tablaLibros");
  const libros = [
    { titulo: "El Quijote", autor: "Cervantes" },
    { titulo: "Cien años de soledad", autor: "García Márquez" },
    { titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa" }
  ];

  if (divLibros) {
    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    const thT = document.createElement("th");
    const thA = document.createElement("th");

    thT.textContent = "Título";
    thA.textContent = "Autor";
    trHead.appendChild(thT);
    trHead.appendChild(thA);
    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");
    libros.forEach((lib) => {
      const tr = document.createElement("tr");
      const tdT = document.createElement("td");
      const tdA = document.createElement("td");
      tdT.textContent = lib.titulo;
      tdA.textContent = lib.autor;
      tr.appendChild(tdT);
      tr.appendChild(tdA);
      tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    divLibros.appendChild(tabla);
    console.log("Ej 18 -> Tabla de libros generada desde JSON.");
  }

  // ====================================================
  // EJERCICIO 19
  // Modificar un objeto JSON en memoria
  // ====================================================
  const btnModificarJSON = document.getElementById("btnModificarJSON");
  let perfil = {
    nombre: "Usuario",
    puntos: 10
  };

  if (btnModificarJSON) {
    btnModificarJSON.addEventListener("click", () => {
      perfil.puntos += 5;
      console.log("Ej 19 -> Perfil modificado:", perfil);
      alert(`Nuevo puntaje de ${perfil.nombre}: ${perfil.puntos}`);
    });
  }

  // ====================================================
  // EJERCICIO 20
  // Leer nombre, guardar en JSON y mostrar en consola
  // ====================================================
  const inputNombre20 = document.getElementById("nombre20");
  const btnGuardar20 = document.getElementById("btnGuardar20");

  if (btnGuardar20 && inputNombre20) {
    btnGuardar20.addEventListener("click", () => {
      const nombre = inputNombre20.value.trim();
      if (!nombre) {
        alert("Ingresa un nombre primero.");
        return;
      }
      const obj = { nombre: nombre, fecha: new Date().toISOString() };
      const json = JSON.stringify(obj);
      console.log("Ej 20 -> Objeto convertido a JSON:", json);
      alert("Nombre guardado en JSON (ver consola).");
    });
  }

  // ====================================================
  // EJERCICIO 21
  // Lista de tareas con estado (completada/pendiente)
// ====================================================
  const listaTareas = document.getElementById("listaTareas");
  const tareas = [
    { texto: "Estudiar JS", completada: false },
    { texto: "Hacer laboratorio 16", completada: true },
    { texto: "Subir práctica a GitHub", completada: false }
  ];

  function renderTareas() {
    if (!listaTareas) return;
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
      const li = document.createElement("li");
      li.textContent = tarea.texto;
      li.dataset.index = index;
      li.className = tarea.completada ? "completada" : "pendiente";
      listaTareas.appendChild(li);
    });
  }

  if (listaTareas) {
    renderTareas();
    listaTareas.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const idx = parseInt(e.target.dataset.index);
        tareas[idx].completada = !tareas[idx].completada;
        console.log("Ej 21 -> Tarea cambiada:", tareas[idx]);
        renderTareas();
      }
    });
  }

  // ====================================================
  // EJERCICIO 22
  // Simulador de perfil: formulario + JSON + localStorage
  // ====================================================
  const formPerfil = document.getElementById("formPerfil");
  const perfilNombre = document.getElementById("perfilNombre");
  const perfilEdad = document.getElementById("perfilEdad");
  const perfilPais = document.getElementById("perfilPais");
  const perfilMostrado = document.getElementById("perfilMostrado");

  function mostrarPerfilGuardado() {
    const datos = localStorage.getItem("perfilUsuario");
    if (datos && perfilMostrado) {
      const obj = JSON.parse(datos);
      perfilMostrado.textContent = `Perfil: ${obj.nombre}, ${obj.edad} años, de ${obj.pais}`;
      console.log("Ej 22 -> Perfil leído de localStorage:", obj);
    }
  }

  if (formPerfil && perfilNombre && perfilEdad && perfilPais) {
    formPerfil.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = perfilNombre.value.trim();
      const edad = perfilEdad.value.trim();
      const pais = perfilPais.value.trim();

      if (!nombre || !edad || !pais) {
        alert("Completa todos los campos del perfil.");
        return;
      }

      const objPerfil = { nombre, edad, pais };
      localStorage.setItem("perfilUsuario", JSON.stringify(objPerfil));
      console.log("Ej 22 -> Perfil guardado en localStorage:", objPerfil);
      mostrarPerfilGuardado();
    });
  }

  mostrarPerfilGuardado();
});

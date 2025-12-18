"use strict";

const API_BASE = "https://pokeapi.co/api/v2/pokemon";
const TOTAL = 12;
const POR_PAGINA = 3;

let paginaActual = 1;
let pokemonsCache = []; 
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAnterior").addEventListener("click", irAnterior);
  document.getElementById("btnSiguiente").addEventListener("click", irSiguiente);

  cargarPokemons();
});
function cargarPokemons() {
  const promesas = [];
  for (let id = 1; id <= TOTAL; id++) {
    promesas.push(
      fetch(`${API_BASE}/${id}`).then(res => {
        if (!res.ok) throw new Error("Error en la respuesta");
        return res.json();
      })
    );
  }
  Promise.all(promesas)
    .then(lista => {
      pokemonsCache = lista;
      mostrarPagina();
    })
    .catch(err => console.error("Error al cargar los 12 Pokémon:", err.message));
}

function mostrarPagina() {
  const grid = document.getElementById("grid");
  const info = document.getElementById("pagInfo");
  grid.innerHTML = "";

  const inicio = (paginaActual - 1) * POR_PAGINA;
  const fin = inicio + POR_PAGINA;
  const subset = pokemonsCache.slice(inicio, fin);

  subset.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${p.name} (#${p.id})</h3>
      <img src="${p.sprites.front_default}" alt="${p.name}">
      <p>Peso: ${p.weight}</p>
      <p>Altura: ${p.height}</p>
    `;
    grid.appendChild(div);
  });

  const totalPaginas = Math.ceil(TOTAL / POR_PAGINA);
  info.textContent = `Página ${paginaActual} de ${totalPaginas}`;
}

function irAnterior() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarPagina();
  }
}

function irSiguiente() {
  const totalPaginas = Math.ceil(TOTAL / POR_PAGINA);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarPagina();
  }
}

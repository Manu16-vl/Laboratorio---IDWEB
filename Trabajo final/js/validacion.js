document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formContacto");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Ingresa un correo electrónico válido.");
            return;
        }

        if (mensaje.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return;
        }

        alert("Formulario validado correctamente ✅");
        form.submit();
    });
});

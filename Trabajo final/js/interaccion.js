document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".pokemon-card, .tipo");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("activo");

            if (card.classList.contains("activo")) {
                card.style.border = "3px solid #2a75bb";
            } else {
                card.style.border = "none";
            }
        });
    });

});

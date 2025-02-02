document.addEventListener("DOMContentLoaded", () => {
    const pokeball = document.querySelector(".pokeball-center");
    const body = document.body;

    // Lista de imagens para alternar o fundo
    const backgrounds = [
        "src/imagens/wallpapers/wallpaper-cards-backs.jpg", // Fundo original
        "src/imagens/wallpapers/wallpaper-cards-front.png"  // Novo fundo ao clicar
    ];

    let isActive = false;

    pokeball.addEventListener("click", () => {
        isActive = !isActive;

        // Alterna a classe para mudar a cor da Pokébola
        pokeball.classList.toggle("active");

        // Transição suave para a troca de fundo
        body.style.transition = "background 0.5s ease-in-out";
        body.style.backgroundImage = isActive 
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgrounds[1]}')`
            : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgrounds[0]}')`;
    });
});
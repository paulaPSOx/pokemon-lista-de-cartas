document.addEventListener("DOMContentLoaded", () => {
    const botaoAlterarTema = document.getElementById("botao-alterar-tema");
    const body = document.body;
    const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

    // Função para ajustar o fundo dependendo do tamanho da tela
    const ajustarFundo = () => {
        const imagemFundo = body.classList.contains("modo-escuro") ? "wallpaper-lua" : "wallpaper-sol";
        const imagemTamanho = window.innerWidth <= 768 ? `${imagemFundo}-min.png` : `${imagemFundo}.png`;
        body.style.backgroundImage = `url('./src/imagens/theme/${imagemTamanho}')`;
    };

    // Verifica se há um tema salvo no localStorage
    if (localStorage.getItem("tema") === "escuro") {
        body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/theme/lua.png");
    } else {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/theme/sol.png");
    }

    // Ajusta o fundo ao carregar a página
    ajustarFundo();

    // Alternar entre os modos claro e escuro
    botaoAlterarTema.addEventListener("click", () => {
        const modoEscuroAtivo = body.classList.toggle("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute(
            "src", 
            modoEscuroAtivo ? "./src/imagens/theme/lua.png" : "./src/imagens/theme/sol.png"
        );

        // Salva a preferência do usuário no localStorage
        localStorage.setItem("tema", modoEscuroAtivo ? "escuro" : "claro");

        // Ajusta a imagem de fundo após alternar o tema
        ajustarFundo();
    });

    // Ajustar a imagem de fundo quando a janela for redimensionada
    window.addEventListener("resize", ajustarFundo);

    // Efeito de virar as cartas ao clicar
    const cartoes = document.querySelectorAll(".cartao-pokemon");

    cartoes.forEach(cartao => {
        cartao.addEventListener('click', function() {
            // Aplica a classe 'virado' ao próprio .cartao-pokemon
            this.classList.toggle('virado');
        });
    });
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos da página
    const botao = document.getElementById("botao");
    const mensagem = document.getElementById("mensagem");

    // Adiciona um evento de clique ao botão
    botao.addEventListener("click", () => {
        const dataAtual = new Date();
        const hora = dataAtual.toLocaleTimeString();

        mensagem.innerHTML = `
            <strong>Olá!</strong><br>
            Você clicou no botão às ${hora}.
        `;

        mensagem.style.color = "#007bff";
    });
});

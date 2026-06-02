// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botao");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", () => {
        mensagem.textContent = "Olá! Você clicou no botão.";
        mensagem.style.color = "blue";
    });
});

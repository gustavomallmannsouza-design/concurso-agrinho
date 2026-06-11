taskInput.value.trim();
// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado com sucesso!");
     inicializarEventos();
});

// Função principal para agrupar as interações da página
function inicializarEventos() {
    // 1. Exemplo de clique em botão com alteração de texto
    const botaoClique = document.querySelector("#meuBotao");
    if (botaoClique) {
        botaoClique.addEventListener("click", () => {
            alert("Botão clicado! O JavaScript está funcionando.");
            botaoClique.innerText = "Clicado! ";
            botaoClique.style.backgroundColor = "#28a745"; // Muda para verde
        });
    }

    // 2. Exemplo de validação de formulário simples
    const formulario = document.querySelector("#meuFormulario");
    if (formulario) {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita que a página recarregue
            
            const campoNome = document.querySelector("#inputNome").value.trim();
            const mensagemErro = document.querySelector("#mensagemErro");

            if (campoNome === "") {
                mensagemErro.innerText = "Por favor, preencha o seu nome.";
                mensagemErro.style.color = "red";
            } else {
                mensagemErro.innerText = `Sucesso! Bem-vindo(a), ${campoNome}!`;
                mensagemErro.style.color = "green";
                formulario.reset(); // Limpa o formulário
            }
        });
    }
}

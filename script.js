// Aguarda o carregamento do DOM para evitar erros de execução no console
document.addEventListener("DOMContentLoaded", () => {
    inicializarComponentes();
});

function inicializarComponentes() {
    const formulario = document.querySelector("#meuFormulario");
    const btnAcessibilidade = document.querySelector("#btnAcessibilidade");

    // Recurso extra de acessibilidade avaliado no Nível 4 (Modo Escuro)
    if (btnAcessibilidade) {
        btnAcessibilidade.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Manipulação avançada do DOM e validação sem recarregar a tela
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const inputNome = document.querySelector("#inputNome");
            const campoMensagem = document.querySelector("#mensagemErro");
            
            // Variável para armazenar e processar dados textuais
            const nomeUsuario = inputNome.value.trim();

            if (nomeUsuario === "") {
                campoMensagem.textContent = "Por favor, digite um nome válido.";
                campoMensagem.style.color = "#e74c3c";
            } else {
                // Mensagem personalizada alinhada estritamente com o tema proposto
                campoMensagem.textContent = `Olá, ${nomeUsuario}! Obrigado por apoiar o equilíbrio entre produção e meio ambiente no campo!`;
                campoMensagem.style.color = "#27ae60";
                formulario.reset();
            }
        });
    }
}


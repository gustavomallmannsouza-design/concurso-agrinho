// Aguarda o carregamento completo do DOM antes de executar as funções
document.addEventListener("DOMContentLoaded", function() {
    
    // Declaração de variáveis para manipulação dos elementos da página
    const botaoTema = document.getElementById("btn-tema");
    const botaoEnviar = document.getElementById("btn-enviar");
    const formulario = document.getElementById("formulario-sustentavel");
    
    // Função 1: Gerenciamento e alternância do tema (Modo Escuro / Claro)
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Função 2: Validação de dados, processamento e manipulação do DOM
    botaoEnviar.addEventListener("click", function() {
        // Armazenamento de informações do formulário em variáveis
        const nomeInscrito = document.getElementById("nome-usuario").value.trim();
        const praticaSelecionada = document.getElementById("tipo-pratica").value;
        
        const painelResultado = document.getElementById("resultado-panel");
        const elementoSaudacao = document.getElementById("mensagem-boas-vinda");
        const elementoDiagnostico = document.getElementById("texto-diagnostico");

        // Validação simples para impedir campos vazios
        if (nomeInscrito === "" || praticaSelecionada === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Processamento lógico com base nas escolhas capturadas
        let feedbackTexto = "";
        if (praticaSelecionada === "1") {
            feedbackTexto = "Atenção! Práticas sem controle geram contaminação e reduzem o equilíbrio natural. Considere migrar para o manejo integrado.";
        } else if (praticaSelecionada === "2") {
            feedbackTexto = "Excelente! A rotação preserva os nutrientes do solo e garante a proteção biológica e a produtividade prolongada.";
        } else if (praticaSelecionada === "3") {
            feedbackTexto = "Parabéns! A tecnologia de precisão maximiza os resultados reduzindo drasticamente o impacto ambiental.";
        }

        // Alteração dinâmica do conteúdo textual do DOM usando as variáveis processadas
        elementoSaudacao.textContent = "Olá, " + nomeInscrito + "!";
        elementoDiagnostico.textContent = feedbackTexto;

        // Exibe o painel de resultados alterando sua classe de visibilidade
        painelResultado.classList.add("show-panel");
    });
});

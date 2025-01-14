/ Captura o formulário e adiciona um evento de envio
document.getElementById("archetype-test").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Objeto para contar os arquétipos
    const archetypeCounts = {
        Cleopatra: 0,
        Guerreira: 0,
        Mae: 0,
        Seria: 0,
        MulherFatal: 0
    };

    // Percorre todas as perguntas e coleta as respostas selecionadas
    const formData = new FormData(event.target);
    for (let [question, answer] of formData.entries()) {
        if (archetypeCounts[answer] !== undefined) {
            archetypeCounts[answer]++;
        }
    }

    // Determina o arquétipo dominante
    const dominantArchetype = Object.keys(archetypeCounts).reduce((a, b) => 
        archetypeCounts[a] > archetypeCounts[b] ? a : b
    );

    // Redireciona para a página de resultados com o arquétipo dominante como parâmetro
    window.location.href = `resultado.html?archetype=${dominantArchetype}`;
});


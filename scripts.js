document
  .getElementById("archetypeTest")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const answers = {};
    const questions = document.querySelectorAll(".question");

    // Coleta as respostas para cada pergunta
    questions.forEach((question, index) => {
      const selectedOption = question.querySelector(
        'input[type="radio"]:checked'
      );
      if (selectedOption) {
        answers[`q${index + 1}`] = selectedOption.value;
      }
    });

    // Verifica se todas as perguntas foram respondidas
    if (Object.keys(answers).length < questions.length) {
      alert("Por favor, responda todas as perguntas antes de continuar.");
      return;
    }

    // Inicializa o contador para os arquétipos
    const results = {
      cleopatra: 0,
      guerreira: 0,
      mae: 0,
      sereia: 0,
      fatal: 0
    };

    // Soma os pontos para cada arquétipo
    for (let answer in answers) {
      results[answers[answer]] += 1;
    }

    // Determina o arquétipo dominante
    const dominantArchetype = Object.keys(results).reduce((a, b) =>
      results[a] > results[b] ? a : b
    );

    // Exibe o resultado final ao usuário
    const archetypeDescriptions = {
      cleopatra:
        "Cleópatra: Líder nata e estrategista, você valoriza poder e influência.",
      guerreira:
        "Guerreira: Corajosa e determinada, você enfrenta desafios com bravura.",
      mae: "Mãe: Empática e acolhedora, você busca criar conexões profundas.",
      sereia:
        "Sereia: Misteriosa e intuitiva, você é guiada por suas emoções mais profundas.",
      fatal:
        "Femme Fatale: Confiante e magnética, você cativa todos ao seu redor."
    };

    alert(
      `Seu arquétipo dominante é: ${archetypeDescriptions[dominantArchetype]}`
    );
  });

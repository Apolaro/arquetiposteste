// JavaScript for Archetype Quiz

const questions = document.querySelectorAll(".quiz-question");
const feedbackSection = document.querySelector(".feedback");
const feedbackTitle = feedbackSection.querySelector("h2");
const feedbackText = feedbackSection.querySelector("p");
let selectedAnswers = [];

// Handle answer selection
questions.forEach((question, index) => {
  const options = question.querySelectorAll("li");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      // Remove previous selection
      options.forEach((opt) => opt.classList.remove("selected"));
      // Mark the clicked option as selected
      option.classList.add("selected");
      // Store the answer
      selectedAnswers[index] = option.dataset.archetype;
    });
  });
});

// Submit button functionality
document.querySelector(".button").addEventListener("click", () => {
  if (selectedAnswers.length < questions.length) {
    alert("Por favor, responda todas as perguntas antes de enviar!");
    return;
  }

  const result = calculateResult(selectedAnswers);
  displayFeedback(result);
});

// Calculate the most frequent archetype
function calculateResult(answers) {
  const frequency = {};

  answers.forEach((answer) => {
    frequency[answer] = (frequency[answer] || 0) + 1;
  });

  // Find the archetype with the highest count
  return Object.keys(frequency).reduce((a, b) =>
    frequency[a] > frequency[b] ? a : b
  );
}

// Display feedback based on the result
function displayFeedback(archetype) {
  const archetypeDescriptions = {
    Cleopatra: "Você é estrategista, confiante e nasceu para liderar.",
    Guerreira:
      "Você é corajosa, determinada e sempre enfrenta desafios de frente.",
    Mae: "Você é empática, acolhedora e tem um grande coração.",
    Seria:
      "Você é intuitiva, misteriosa e tem uma conexão profunda com suas emoções.",
    MulherFatal: "Você é magnética, confiante e domina a arte da sedução."
  };

  feedbackTitle.textContent = `Seu arquétipo é: ${archetype}`;
  feedbackText.textContent = archetypeDescriptions[archetype];
  feedbackSection.style.display = "block";
}


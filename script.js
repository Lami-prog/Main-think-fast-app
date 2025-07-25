const questions = [
  {
    question: "Who is the current president of Nigeria?",
    choices: ["Bola Tinubu", "Goodluck Jonathan", "Muhammadu Buhari", "Yemi Osinbajo"],
    answer: "Bola Tinubu"
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "HighText Machine Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "What year did Nigeria gain independence?",
    choices: ["1960", "1970", "1957", "1963"],
    answer: "1960"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-button");
const restartBtn = document.getElementById("restart-button");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score-container");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  scoreEl.textContent = "";

  currentQuestion.choices.forEach(choice => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice-button");
    btn.addEventListener("click", () => handleAnswer(choice));
    li.appendChild(btn);
    choicesEl.appendChild(li);
  });

  nextBtn.style.display = "none";
}

function handleAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedChoice === currentQuestion.answer;

  if (isCorrect) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    feedbackEl.textContent = `❌ Incorrect! The correct answer was "${currentQuestion.answer}".`;
  }

  Array.from(document.querySelectorAll(".choice-button")).forEach(button => {
    button.disabled = true;
  });

  nextBtn.style.display = "inline-block";
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.textContent = "Quiz Complete!";
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  scoreEl.textContent = `🎉 Your score: ${score} out of ${questions.length}`;
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  restartBtn.style.display = "none";
  showQuestion();
}

nextBtn.addEventListener("click", showNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Load the first question
showQuestion();

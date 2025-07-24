const questions = [
  {
    question: "Who is the current president of Nigeria?",
    options: ["Muhammadu Buhari", "Bola Ahmed Tinubu", "Goodluck Jonathan", "Yemi Osinbajo"],
    answer: "Bola Ahmed Tinubu"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markdown Language", "HighText Machine Language", "HyperText Markup Language", "HyperLoop Marking Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "What year did Nigeria gain independence?",
    options: ["1960", "1957", "1963", "1970"],
    answer: "1960"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const quizContainer = document.getElementById("quiz-

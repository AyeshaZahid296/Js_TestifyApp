// Timer Logic
let time = 60;
let timer;
function startTimer() {
  timer = setInterval(() => {
    if (time > 0) {
      document.getElementById('time').textContent = --time;
    } else {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// Quiz Logic
let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  if (currentQuestion < quizQuestions.length) {
    const q = quizQuestions[currentQuestion];
    document.getElementById('quiz').innerHTML = `
      <p>${q.question}</p>
      ${q.options.map((opt, idx) => `<button onclick="checkAnswer(${idx})">${opt}</button>`).join('')}
    `;
  } else {
    endQuiz();
  }
}

function checkAnswer(selected) {
  const q = quizQuestions[currentQuestion];
  if (selected === q.correct) score++;
  currentQuestion++;
  loadQuiz();
}

function endQuiz() {
  clearInterval(timer);
  const message = score > 7 ? "Excellent! Keep it up!" : "Good try! Don't give up!";
  document.getElementById('quiz').innerHTML = `
    <p>Your score: ${score}</p>
    <p>${message}</p>
    <button onclick="retryQuiz()">Retry</button>
    <button onclick="goHome()">Home</button>
  `;
}

function retryQuiz() {
  score = 0;
  currentQuestion = 0;
  time = 60;
  startTimer();
  loadQuiz();
}

function goHome() {
  window.location.href = "index.html";
}

// Call loadQuiz() and startTimer() when quiz.html loads
if (document.getElementById('quiz')) {
  loadQuiz();
  startTimer();
}
function goBackToHome() {
  window.location.href = "index.html"; // Change "index.html" to your home page file name
}
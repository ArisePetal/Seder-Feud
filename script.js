const answers = [
  "matzah",
  "bitter herbs",
  "charoset",
  "pharaoh",
  "moses"
];

const answerPoints = [50, 40, 30, 20, 10];
const revealed = [false, false, false, false, false];
let team1Score = 0;

const answersBox = document.getElementById("answers");
const guessInput = document.getElementById("guessInput");
const score1 = document.getElementById("score1");
const prompt = document.getElementById("prompt");

prompt.textContent = "Why do we eat ____ at Passover";

function renderAnswers() {
  answersBox.innerHTML = "";

  for (let i = 0; i < answers.length; i++) {
    const div = document.createElement("div");
    div.className = "answer";

    if (revealed[i]) {
      div.textContent = `${i + 1}. ${answers[i]} - ${answerPoints[i]}`;
    } else {
      div.textContent = `${i + 1}. __________`;
    }

    answersBox.appendChild(div);
  }
}

function submitGuess() {
  const guess = guessInput.value.trim().toLowerCase();

  for (let i = 0; i < answers.length; i++) {
    if (guess === answers[i] && !revealed[i]) {
      revealed[i] = true;
      team1Score += answerPoints[i];
      score1.textContent = team1Score;
      renderAnswers();
      guessInput.value = "";
      return;
    }
  }

  guessInput.value = "";
  alert("Wrong guess");
}

renderAnswers();

function startQuiz() {
   var welcome = document.getElementById("welcome"); 
   var quiz = document.getElementById("quiz");
    var header = document.getElementById("scores");
    welcome.style.display = "none";
    quiz.style.display = "block";
    header.style.display = "flex";
    buildQuestion();
  }
const questions = [
    {
        question: "practice question",
        answers: ["test1", "test2", "test3", "test4",],
        correctAnswer: 2,
    },
    {
        question: "practice question 2",
        answers: ["test1", "test2", "test3", "test4",],
        correctAnswer: 1,
    },
]
var currentQuestion= 0;
var previousAnswer="";
var score= 0;
function checkAnswer(correctAnswer,selectedAnswer){
    if (correctAnswer===selectedAnswer){
        previousAnswer="Correct!";
        score++;
    } else {previousAnswer="Wrong!";}
    if (currentQuestion < questions.length) {
        buildQuestion();
    }
}
function buildQuestion () {
    var question = document.getElementById("quiz");
    var questionHTML = `<div>${questions[currentQuestion].question}</div>`;
    questions[currentQuestion].answers.forEach(answer => questionHTML+=`<div><button onclick="checkAnswer(${questions[currentQuestion].checkAnswer},${answer})" id="${answer}">${answer}</button></div>`);
    if (previousAnswer!==""){
        questionHTML+=`<div>${previousAnswer}</div>`;
    }
    question.innerHTML = questionHTML;
    currentQuestion++;
}


function startQuiz() {
   var welcome = document.getElementById("welcome"); 
   var quiz = document.getElementById("quiz");
    var header = document.getElementById("scores");
    welcome.style.display = "none";
    quiz.style.display = "block";
    header.style.display = "flex";
    buildQuestion();
    startTimer()
  }
// start timer
function startTimer() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft --;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        // Go to end of function when timer at 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            endgame()
        }
    }, 1000);
    next();
}


const questions = [
    {
        question: "What do you use to link a class to the css sheet?",
        answers: ["a #", "a .", "a bracket", "a qoute",],
        correctAnswer: "a .",
    },
    {
        question: "Where do you link the JavaScript file?",
        answers: ["At the bottom of the HTML", "At the top of the HTML", "In the header", "In a div",],
        correctAnswer: "At the bottom of the HTML",
    },
    {
        question: "What is the asset called for styling",
        answers: ["Images", "CSS", "Java script", "ReadMe",],
        correctAnswer: "CSS",
    },
    {
        question: "How do you screenshot on mac?",
        answers: ["Screeonfy", "zoom", "control shift 4", "copy and pase",],
        correctAnswer: "control shift 4",
    },
    {
        question: "How do you start the quiz?",
        answers: ["start quiz ()", "function get element", "get id element", "use a flex",],
        correctAnswer: "start quiz ()",
    },
]

var currentQuestion= 0;
var previousAnswer="";
var score= 0;
var allScores= [];
function checkAnswer(correctAnswer,selectedAnswer){
    if (correctAnswer===selectedAnswer){
        previousAnswer="Correct!";
        score++;
    } else {previousAnswer="Wrong!";}
    if (currentQuestion < questions.length) {
        buildQuestion();
    } else {allScores.push(score);
    console.log(allScores)}
    console.log(score);
}
function buildQuestion () {
    var question = document.getElementById("quiz");
    var questionHTML = `<div>${questions[currentQuestion].question}</div>`;
    questions[currentQuestion].answers.forEach(answer => questionHTML+=`<div><button onclick="checkAnswer('${questions[currentQuestion].correctAnswer}','${answer}')" id="${answer}">${answer}</button></div>`);
    if (previousAnswer!==""){
        questionHTML+=`<div>${previousAnswer}</div>`;
    }
    question.innerHTML = questionHTML;
    currentQuestion++;
}


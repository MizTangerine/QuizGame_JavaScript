const timerEl = document.getElementById('timer')
const startBtn = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-buttons');
const answerBtn1 = document.getElementById('Answer1')
const answerBtn2 = document.getElementById('Answer2')
const answerBtn3 = document.getElementById('Answer3')
const answerBtn4 = document.getElementById('Answer4')

// timer
let timerCount = 75;
let timerId = '';

function countDown() {
    timerEl.innerText = timerCount
    if (timerCount > 0) {
        timerCount--
    } else {
        console.log('time is up')
    }
}
countDown()

// start button is clicked
function startGame() {
    console.log('started')
    startBtn.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    displayQuestion()
    timerId = setInterval(countDown, 1000)
}
startBtn.addEventListener('click', startGame)

// Questionss
let curQuestionIndex = 0

function displayQuestion() {
    questionEl.innerText = questions[curQuestionIndex].question
    answerBtn1.innerText = questions[curQuestionIndex].answers[0].text
    answerBtn2.innerText = questions[curQuestionIndex].answers[1].text
    answerBtn3.innerText = questions[curQuestionIndex].answers[2].text
    answerBtn4.innerText = questions[curQuestionIndex].answers[3].text
    answerBtn1.setAttribute('data-correct', questions[curQuestionIndex].answers[0].correct)
    answerBtn2.setAttribute('data-correct', questions[curQuestionIndex].answers[1].correct)
    answerBtn3.setAttribute('data-correct', questions[curQuestionIndex].answers[2].correct)
    answerBtn4.setAttribute('data-correct', questions[curQuestionIndex].answers[3].correct)
}

const questions = [
    {
        question: 'The condition in an if/else statement is enclosed within ____.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parentheses', correct: false },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true }
        ]
    }
]

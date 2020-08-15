const timerEl = document.getElementById('timer');
const timerCl = document.querySelector('.timer')
const startBtn = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-buttons');
const answerBtn1 = document.getElementById('Answer1');
const answerBtn2 = document.getElementById('Answer2');
const answerBtn3 = document.getElementById('Answer3');
const answerBtn4 = document.getElementById('Answer4');
const rightWrong = document.getElementById('right-or-wrong')

// timer
let timerCount = 75;
let timerId = '';
const h2El = document.createElement('h2')


function countDown() {
    timerEl.innerText = timerCount
    if (timerCount > 0) {
        timerCount--
    } else {
        console.log('time is up')
        clearInterval(timerId)
        questionContainerEl.classList.add('hide')
        h2El.textContent = 'Time is up!';
        timerCl.appendChild(h2El);
        timerCl.setAttribute('style', 'font-size:40px', 'align-items:center')
    }
}
countDown()

// start button is clicked
startBtn.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startBtn.classList.add('hide')
    questionContainerEl.classList.remove('hide')

    displayQuestion()
    console.log('question index', curQuestionIndex)
    timerId = setInterval(countDown, 1000)
}

// Questionss
let curQuestionIndex = 0

function displayQuestion() {
    rightWrong.innerText = ''
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

// select answer

let answerCorrect = 0
let answerWrong = 0

answerBtn1.addEventListener('click', clickAnswer)
answerBtn2.addEventListener('click', clickAnswer)
answerBtn3.addEventListener('click', clickAnswer)
answerBtn4.addEventListener('click', clickAnswer)

function clickAnswer() {
    let selection = this.getAttribute('data-correct')
    console.log('begin', timerCount)
    console.log(selection)
    if (selection == 'true') {
        answerCorrect++
        console.log('correct')
        rightWrong.innerText = 'You got it right!'
    } else {
        answerWrong++
        timerCount -= 10
        console.log('wrong', timerCount)
        rightWrong.innerText = 'OOPS, you missed this one.'
    }
    if (curQuestionIndex < questions.length - 1) {
        curQuestionIndex++
        // How do I set a delay????
        displayQuestion()
    }
    else {
        endGame()
    }
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

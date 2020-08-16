const timerEl = document.getElementById('timer');
const timerCl = document.querySelector('.timer');
const startBtn = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-buttons');
const answerBtn1 = document.getElementById('Answer1');
const answerBtn2 = document.getElementById('Answer2');
const answerBtn3 = document.getElementById('Answer3');
const answerBtn4 = document.getElementById('Answer4');
const rightWrong = document.getElementById('right-or-wrong');
const scoreEl = document.getElementById('score');
const results = document.getElementById('results');
const submitEl = document.getElementById('submit');
const initialsEl = document.getElementById('initials');
const highScoreEl = document.getElementById('high-score')


// timer
let timerCount = 50;
let timerId = '';
// const h2El = document.createElement('h2');


function countDown() {
    timerEl.innerText = timerCount;
    if (timerCount > 0) {
        timerCount--;
    } else {
        console.log('time is up');
        clearInterval(timerId);
        questionContainerEl.classList.add('hide');
        timerCl.textContent = 'Time is up! Quiz will reload!';
        timerCl.setAttribute('style', 'color: red')
        setTimeout(function () {
            location.reload()
        }, 2000)
    }
}
countDown()

// start button is clicked
startBtn.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    clearInterval(timerId);
    startBtn.classList.add('hide')
    questionContainerEl.classList.remove('hide')

    displayQuestion()
    console.log('question index', curQuestionIndex)
    timerId = setInterval(countDown, 1000)
}

// Questions
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
    // rightWrong.innerText = ''
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
    console.log('begin', timerCount, timerId)
    console.log(selection)
    if (selection == 'true') {
        answerCorrect++
        console.log('correct')
        // rightWrong.innerText = 'You got it right!'
        alert('You got it right!')
    } else {
        answerWrong++
        timerCount -= 10
        console.log('wrong', timerCount, timerId)
        // rightWrong.innerText = 'OOPS, you missed this one.'
        alert('OOPS, you missed this one.')
    }
    if (curQuestionIndex < questions.length - 1) {
        curQuestionIndex++

        displayQuestion()
    }
    else {
        endGame()
    }
}
// const scores = []
// const user = []

function endGame() {
    clearInterval(timerId)
    timerEl.innerText = timerCount
    console.log('timer id', timerId)
    console.log('timer count', timerCount)
    questionContainerEl.classList.add('hide')
    scoreEl.classList.remove('hide')
    let score = (timerCount * answerCorrect)
    results.innerText = "Right: " + answerCorrect + " / Wrong: " + answerWrong + " Score: " + score

    let highScore = parseInt(localStorage.getItem('highScore'));
    console.log('high score', highScore);

    highScoreEl.textContent = highScore || 0;

    if (highScore && score > highScore) {
        localStorage.setItem('highScore', score);
    } else if (!highScore) localStorage.setItem('highScore', score);

    // localStorage.setItem('score', score)
    // scores.push(score);
    // console.log(scores)
    // localStorage.setItem('score', JSON.stringify(scores));
}

// function saveUser() {
//     let initials = initialsEl.value
//     console.log(initialsEl.value)
//     localStorage.setItem('initials', initials);
// }

// submitEl.addEventListener('click', saveUser)

// saveUser()

// function saveUser() {
//     let initials = initialsEl.value
//     user.push(initials);
//     console.log(user)
//     localStorage.setItem('initials', JSON.stringify(user))

//     scores.push(score);
//     console.log(scores)
//     localStorage.setItem('score', JSON.stringify(scores))
// }

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
    // {
    //     question: 'Commonly used data types DO NOT include:',
    //     answers: [
    //         { text: 'strings', correct: false },
    //         { text: 'booleans', correct: false },
    //         { text: 'alerts', correct: true },
    //         { text: 'numbers', correct: false }
    //     ]
    // },
    // {
    //     question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    //     answers: [
    //         { text: 'JavaScript', correct: false },
    //         { text: 'terminal/bash', correct: false },
    //         { text: 'for loops', correct: false },
    //         { text: 'console.log', correct: true }
    //     ]
    // }
]

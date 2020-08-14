const timerEl = document.getElementById('timer')
const startBtn = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container')

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
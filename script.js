const timerEl = document.getElementById('timer')


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
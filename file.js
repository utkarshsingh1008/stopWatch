const timeElement = document.getElementById("time")
const startButton = document.getElementById("start")
const pauseContinueButton = document.getElementById("pause")
const stopButton = document.getElementById("stop")

let hour = 0
let minute = 0
let second = 0

function getTimeInString() {
    let time = ""
    time += hour < 10 ? `0${hour}` : `${hour}`
    time += minute < 10 ? `:0${minute}` : `:${minute}`
    time += second < 10 ? `:0${second}` : `:${second}`
    console.log(time)
    return time
}
timeElement.innerText = getTimeInString()

pauseContinueButton.setAttribute('disabled', '')
stopButton.setAttribute('disabled', '')

let interval
function start() {
    interval = setInterval(function () {
        increaseTime()
    }, 500)
    startButton.setAttribute('disabled', '')
    pauseContinueButton.removeAttribute('disabled')
    stopButton.removeAttribute('disabled')
}

function pause() {
    if (pauseContinueButton.innerText === "pause") {
        clearInterval(interval)
        pauseContinueButton.innerText = "continue"
    } else {
        start()
        pauseContinueButton.innerText = "pause"
    }

}

function stop() {
    clearInterval(interval)
    hour = 0
    minute = 0
    second = 0
    timeElement.innerText = getTimeInString()
    pauseContinueButton.setAttribute('disabled', true)
    stopButton.setAttribute('disabled', true)
    startButton.removeAttribute('disabled')
    pauseContinueButton.innerText = "pause"
}


function increaseTime() {
    second += 0.5
    if (second === 60) {
        second = 0
        minute += 1
    }
    if (minute === 60) {
        minute = 0
        hour += 1
    }
    if (Number.isInteger(second)) {
        timeElement.innerText = getTimeInString()
    }

}
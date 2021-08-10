let minutes, seconds, counterInterval = undefined

const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

resetCounter()

function updateCounterEl() {
    // se os seg/min for < 10, ele coloca outro 0 na frente pra ficar com 2 casas (Ex: 20:09/ 06:03).
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

// POMODORO TIMER

function startCounter() {
    if(counterInterval) return

    counterInterval = setInterval( () => {
        
        // se seconds e minutes = 0 retrona clearInterval
        if(!seconds && !minutes) return destroyInterval()

        // se só os segundos for = 0, vira 59 e tira 1 minuto.
        if(!seconds) {
            seconds = 59
            --minutes
            updateCounterEl()
            return
        }

        // se não, só tira 1 de cada segundo.
        --seconds
        updateCounterEl()

    }, 1000)
}

// POMODORO TIMER CONTROLS

function pauseCounter() {
    destroyInterval()
}

function destroyInterval() {
    clearInterval(counterInterval)
    counterInterval = undefined
}

function resetCounter() {
    destroyInterval()

    minutes = 25;
    seconds = 00; 
    updateCounterEl()

}

// TIMER CONTROL

function plusBtn() {
    if(minutes >= 0) {
        ++minutes
        updateCounterEl()
    }
}

function minusBtn() {
    if(minutes > 1) {
        --minutes
        updateCounterEl()
    }
}

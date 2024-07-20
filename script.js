// script.js

let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', recordLap);

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStop').innerText = 'Start';
    isRunning = false;
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.innerText = document.getElementById('display').innerText;
        document.getElementById('laps').appendChild(lapTime);
    }
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('display').innerText = `${h}:${m}:${s}`;
}

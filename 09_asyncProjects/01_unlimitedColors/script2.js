// random color generate

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6 ; i++) {
        
        // random value genrate
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color;
}

// selectors
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')

// functions
let intervalId;
const startChangingColor = function(){
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

// button events
startButton.addEventListener('click', startChangingColor)
stopButton.addEventListener('click', stopChangingColor)
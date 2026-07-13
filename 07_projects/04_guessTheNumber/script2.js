// random number formula
let randomNumber = parseInt(Math.random() * 100 + 1);

// selectors
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

// values to insert
const p = document.createElement('p')

// game variables
let prevGuess = [] // array of prev guesses
let numGuess = 1 // number of guesses

let playGame = true

// checks available for playing new game or not
if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

// logic for validating inputs (between 1 and 100)
function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    } else if (guess < 1) {
        alert (`Please enter a number more than 1`)
    } else if (guess > 100) {
        alert (`Please enter a number less than 100`)
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber} !`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// logic for printing msg about correct input, low input or high input
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low!`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high!`)
    }
}

// update prev guesses on dom, clean the prev value, update remaining guesses
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `

    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

// interact with dom, low or high print
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// end game
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

// start new game
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}



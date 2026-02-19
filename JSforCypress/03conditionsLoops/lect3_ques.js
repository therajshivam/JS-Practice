// Q3. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;
let userNum = prompt("Guess the game number: ");

while (userNum != gameNum) {
    userNum = prompt("Try again! You have guessed wrong number.")
}

alert("Congratulations! You have guessed the corrected number.");

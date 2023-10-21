const randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const paragraph = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGmae = true;

// Methods

if (playGmae) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validGuess(guess)
    })
}

function validGuess(guess) {
    //
}

function checkGuess(guess) {
    //
}

function displayGuess(guess) {
    //
}

function displayMessage(message) {
    //
}


function endGame() {
    //
}


function newGame() {
    //
}




let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    subt.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Coloque um número válido.');
    } else if (guess < 1) {
        alert('Coloque um número maior que 1!');
    } else if (guess > 100){
        alert('Coloque um número menor que 100!')
    } else {
        previousGuesses.push(guess);
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Acabou a partida! O número era ${randomNumber}`);
            endGame();
        } else {
        displayGuesses(guess);
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`Você escolheu o número certo!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Muito baixo! Tente novamente`);
    } else if (guess > randomNumber) {
        displayMessage(`Muito alto! Tente novamente`);
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
          p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Começar nova partida</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
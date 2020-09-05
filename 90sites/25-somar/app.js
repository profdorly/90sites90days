let firstNumber = parseInt(Math.random()*100);
let secondNumber = parseInt(Math.random()*100);

let total = firstNumber + secondNumber;

let primary = document.getElementById('primary-number');
    primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById('secondary-number');
    secondary.innerHTML = `<p>${secondNumber}</p>`


let button = document.getElementById('btn')

button.addEventListener('click', function(){

let guess = document.getElementById('guess').value;
    guess = Number(guess);

if (guess === total){
    alert('Correto! Parabéns :D Some outra combinação agora.');
    window.location.reload()
} else {
    alert('Uma pena. Está incorreto. A resposta certa é ' + total + '.')
    window.location.reload()

}
    });
let colors = [ '#6A0AAB', '#5C2680', '#44036F', '#983FD5', '#A967D5'];

let button = document.getElementById('button');

button.addEventListener('click', function(){
    let index = parseInt((Math.random()*colors.length)+1);
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})
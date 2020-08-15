const gifHover = document.querySelector('#gif-hover');
const hover = document.querySelector('#hover');
const picHover = document.querySelector('#pic-hover');

gifHover.style.display = 'none';

hover.onmouseover = function() {
  gifHover.style.display = 'block';
  picHover.style.display = 'none';
}

hover.onmouseout = function() {
  gifHover.style.display = 'none';
  picHover.style.display = 'block';
}
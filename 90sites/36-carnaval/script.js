var animationClasses = [
    'glitter__item--animation1',
    'glitter__item--animation2',
    'glitter__item--animation3',
    'glitter__item--animation4',
    'glitter__item--animation5',
    'glitter__item--animation6',
    'glitter__item--animation7',
    'glitter__item--animation8',
    'glitter__item--animation9',
];

var colourClasses = [
    'glitter__item--colour1',
    'glitter__item--colour2',
    'glitter__item--colour3',
    'glitter__item--colour4',
    'glitter__item--colour5',
];

document.getElementById("button").onclick = function fun()
{
  this.remove();
  
  for(let i = 0; i < 300; i++) {
    var newNode = document.createElement('div');
    var randomClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];
    var randomColour = colourClasses[Math.floor(Math.random() * colourClasses.length)];
    var animationDelay = parseFloat(Math.min(0 + (Math.random() * (5 - 0)), 5).toFixed(2)) + "s";
    var left = Math.floor(Math.random() * (100 - 0 + 1)) + 0 + "vw";
    
    newNode.className = 'glitter__item ' + randomClass + ' ' + randomColour;
    
    newNode.setAttribute("style", "animation-delay: " + animationDelay + "; left: " + left + ";");
      
    document.getElementById('glitter').appendChild(newNode);
  }
}
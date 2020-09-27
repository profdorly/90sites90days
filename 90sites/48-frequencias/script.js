    // I copied this synth setup from https://github.com/Tonejs/Tone.js/blob/master/examples/jump.html
    var synth = new Tone.Synth({
        "oscillator" : {
            "type" : "fatsawtooth",
            "count" : 3,
            "spread" : 30
        },
        "envelope": {
            "attack": 0.01,
            "decay": 0.1,
            "sustain": 0.5,
            "release": 0.4,
            "attackCurve" : "exponential"
        },
    }).toMaster();

var pad = document.getElementById("pad");
var label = document.getElementById("label");

var dragging = false;

function getFrequency(x){
  // Far left of the screen means fraction=0, far right means fraction=1
  let fraction = x/window.innerWidth;
  // Our maximum frequency is 1000Hz
  return fraction*1000;
}

function getBackgroundColor(x){
  if (dragging) {
    let fraction = x/window.innerWidth;
    // Create a "Hue/Saturation/Lightness" (hsl) color for the background
    // On left side of screen, hue=0 (red)
    // On right side of screen, hue=360 (also red)
    return "hsl("+(fraction*360)+", 100%, 50%)";
  }
  else return "#222";
}

function getLabelColor(x){
  if (dragging) {
    let fraction = x/window.innerWidth;
    // Create a "Hue/Saturation/Lightness" (hsl) color for the label
    // This one is the opposite of the background; the hue is offset by +180
    return "hsl("+(fraction*360+180)+", 100%, 50%)";
  }
  else return "white";
}

function getLabel(x){
  if (dragging) {
    var frequency = getFrequency(x);
    return Math.round(frequency)+"Hz";
  }
  else return "CLIQUE E ARRASTE";
}

function down(event) {
  // This is a little workaround for a problem with audio in Chrome;
  // Chrome disables any noisy sound things by default until you have clicked/touched something on the page, at which point we are allowed to turn sound back on.
  // That's what this little snippet does: It turns sound back on if it's disabled.
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }

  dragging = true;
  var x = event.pageX;
  synth.triggerAttack(getFrequency(x));
  label.innerHTML = getLabel(x);
  label.style.color = getLabelColor(x);
  pad.style.background = getBackgroundColor(x);
}

function up(event) {
  dragging = false;
  synth.triggerRelease();
  label.innerHTML = getLabel();
  label.style.color = getLabelColor();
  pad.style.background = getBackgroundColor();
}

function move(event) {
  if (dragging) {
    var x = event.pageX;
    synth.setNote(getFrequency(x));
    label.innerHTML = getLabel(x);
    label.style.color = getLabelColor(x);
    pad.style.background = getBackgroundColor(x);
  }
}

pad.addEventListener("mousedown", down);
pad.addEventListener("mouseup", up);
pad.addEventListener("mousemove", move);

pad.addEventListener("touchstart", event => {
  event.preventDefault();
  down(event.changedTouches[0]);
});
pad.addEventListener("touchend", event => {
  event.preventDefault();
  up(event.changedTouches[0]);
  });
pad.addEventListener("touchmove", event => {
  event.preventDefault();
  move(event.changedTouches[0]);
});
const container = document.getElementById('container');
const circlesArr = [];
const soundsArr = [];
const tracks = [
	'./sounds/harrypotter.mp3',
	'./sounds/gameofthrones.mp3',
	'./sounds/darth.mp3',
	'./sounds/suzie.mp3',
]
let rows = 15;
let cols = 15;

for (let i = 0; i < cols; i++) {
	circlesArr[i] = [];
	soundsArr[i] = []

	for (let j = 0; j < rows; j++) {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		container.appendChild(circle);
		circlesArr[i].push(circle);	

		const sound = document.createElement('audio');
		sound.classList.add('sound')
		circle.appendChild(sound)
		soundsArr[i].push(sound)
	}
}

circlesArr.forEach((cols, i) => {
	cols.forEach((circle, j) => {
		circle.addEventListener('click', () => {
			playAudio()
			growCircles(i, j);
		});
	});
});

function growCircles(i, j) {
	if(circlesArr[i] && circlesArr[i][j]) {
		if(!circlesArr[i][j].classList.contains('grow')) {
			circlesArr[i][j].classList.add('grow');
			setTimeout(() => {
				growCircles(i-1, j)
				growCircles(i+1, j)
				growCircles(i, j-1)
				growCircles(i, j+1)
			}, 100)
			
			setTimeout(() => {
				circlesArr[i][j].classList.remove('grow');
			}, 500);
		}
	}
}

function playAudio() {
	const audio = document.querySelector('.sound')
	let track = tracks[Math.floor(Math.random() * tracks.length)];
	console.log(track)
	const background = document.getElementById('body')
	const h3 = document.getElementById('h3')

	if(track == './sounds/harrypotter.mp3'){
		background.style.backgroundImage = "url('./backgrounds/harrypotter.png')"
		h3.style.background = "rgba(0, 0, 0, 0.500)"
		h3.innerHTML= "Quem não ama Harry Potter ?"
	} else if (track == './sounds/gameofthrones.mp3'){
		background.style.backgroundImage = "url('./backgrounds/got.jpg')"
		h3.innerHTML= "Existe fim mais decepcionante ?"
	} else if (track == './sounds/darth.mp3'){
		background.style.backgroundImage = "url('./backgrounds/darth.jpeg')"
		h3.innerHTML= "Sem comentários..."
	} else if (track == './sounds/suzie.mp3'){
		background.style.backgroundImage = "url('./backgrounds/suzie.png')"
		h3.innerHTML= "♡♡♡♡♡♡♡"
	}
	

	setTimeout(() => {
		audio.src = track;
		audio.play()
	}, 0)
}
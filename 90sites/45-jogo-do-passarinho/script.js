const score = document.querySelector(".score");
        const startScreen = document.querySelector(".startScreen");
        const gameArea = document.querySelector(".gameArea");
        const gameMessage = document.querySelector(".gameMessage");
        gameMessage.addEventListener("click", start);
        startScreen.addEventListener("click", start);
        document.addEventListener("keydown", pressOn);
        document.addEventListener("keyup", pressOff);
        let keys = {};
        let player = {};
 
        function start() {
            player.speed = 2;
            player.score = 0;
            player.inplay = true;
            gameArea.innerHTML = "";
            gameMessage.classList.add("hide");
            startScreen.classList.add("hide");
            let bird = document.createElement("div");
            bird.setAttribute("class", "bird");
            let wing = document.createElement("span");
            wing.setAttribute("class", "wing");
            wing.pos = 15;
            wing.style.top = wing.pos + "px";
            bird.appendChild(wing);
            gameArea.appendChild(bird);
            player.x = bird.offsetLeft;
            player.y = bird.offsetTop;
            player.pipe = 0;
            let spacing = 500;
            let howMany = Math.floor((gameArea.offsetWidth) / spacing);
            ///console.log(howMany);
            for (let x = 0; x < howMany; x++) {
                buildPipes(player.pipe * spacing);
            }
            window.requestAnimationFrame(playGame);
        }
 
        function buildPipes(startPos) {
            let totalHeight = gameArea.offsetHeight;
            let totalWidth = gameArea.offsetWidth;
            player.pipe++;
            let pipeColor = clr();
            let pipe1 = document.createElement("div");
            pipe1.start = startPos + totalWidth;
            pipe1.classList.add("pipe");
            pipe1.innerHTML = "<br>" + player.pipe;
            pipe1.height = Math.floor(Math.random() * 350);
            pipe1.style.height = pipe1.height + "px";
            pipe1.style.left = pipe1.start + "px";
            pipe1.style.top = "0px";
            pipe1.x = pipe1.start;
            pipe1.id = player.pipe;
            pipe1.style.backgroundColor = pipeColor ;
            gameArea.appendChild(pipe1);
            let pipeSpace = Math.floor(Math.random() * 250) + 150;
            let pipe2 = document.createElement("div");
            pipe2.start = pipe1.start;
            pipe2.classList.add("pipe");
            pipe2.innerHTML = "<br>" + player.pipe;
            pipe2.style.height = totalHeight - pipe1.height - pipeSpace + "px";
            pipe2.style.left = pipe1.start + "px";
            pipe2.style.bottom = "0px";
            pipe2.x = pipe1.start;
            pipe2.id = player.pipe;
            pipe2.style.backgroundColor = pipeColor ;
            gameArea.appendChild(pipe2);
        }
 
        function clr(){
            return "#"+Math.random().toString(16).substr(-6);
        }
 
        function movePipes(bird) {
            let lines = document.querySelectorAll(".pipe");
            let counter = 0; //counts pips to remove
            lines.forEach(function (item) {
                item.x -= player.speed;
                item.style.left = item.x + "px";
                if (item.x < 0) {
                    item.parentElement.removeChild(item);
                    counter++;
                }
                if (isCollide(item, bird)) {
                    playGameOver(bird);
                }
            })
            counter = counter / 2;
            for (let x = 0; x < counter; x++) {
                buildPipes(0);
            }
        }
 
        function isCollide(a, b) {
            let aRect = a.getBoundingClientRect();
            let bRect = b.getBoundingClientRect();
            return !(
                (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right))
        }
 
        function playGame() {
            if (player.inplay) {
                let bird = document.querySelector(".bird");
                let wing = document.querySelector(".wing");
                movePipes(bird);
                let move = false;
                if (keys.ArrowLeft && player.x > 0) {
                    player.x -= player.speed;
                    move = true;
                }
                if (keys.ArrowRight && player.x < (gameArea.offsetWidth - 50)) {
                    player.x += player.speed;
                    move = true;
                }
                if ((keys.ArrowUp || keys.Space) && player.y > 0) {
                    player.y -= (player.speed * 5);
                    move = true;
                }
                if (keys.ArrowDown && player.y < (gameArea.offsetHeight - 50)) {
                    player.y += player.speed;
                    move = true;
                }
                if (move) {
                    wing.pos = (wing.pos == 15) ? 25 : 15;
                    wing.style.top = wing.pos + "px";
                }
                player.y += (player.speed * 2);
                if (player.y > gameArea.offsetHeight) {
                    playGameOver(bird);
                }
                bird.style.top = player.y + "px";
                bird.style.left = player.x + "px";
                window.requestAnimationFrame(playGame);
                player.score++;
                score.innerText = "Pontos: " + player.score;
            }
        }
 
        function playGameOver(bird) {
            player.inplay = false;
            gameMessage.classList.remove("hide");
            bird.setAttribute("style", "transform:rotate(180deg)");
            gameMessage.innerHTML = "O jogo acabou!<br>Você fez " + player.score + " pontos <br>Clique aqui para começar novamente";
        }
 
        function pressOn(e) {
            e.preventDefault();
            keys[e.code] = true;
            ///console.log(keys);
        }
 
        function pressOff(e) {
            e.preventDefault();
            keys[e.code] = false;
        }
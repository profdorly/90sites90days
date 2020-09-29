var Game      = Game      || {};
var Keyboard  = Keyboard  || {}; 
var Component = Component || {};

Keyboard.Keymap = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

Keyboard.ControllerEvents = function() {
  
  var self      = this;
  this.pressKey = null;
  this.keymap   = Keyboard.Keymap;
  
  document.onkeydown = function(event) {
    self.pressKey = event.which;
  };
  
  this.getKey = function() {
    return this.keymap[this.pressKey];
  };
};

Component.Stage = function(canvas, conf) {  
  
  this.keyEvent  = new Keyboard.ControllerEvents();
  this.width     = canvas.width;
  this.height    = canvas.height;
  this.length    = [];
  this.food      = {};
  this.score     = 0;
  this.direction = 'right';
  this.conf      = {
    cw   : 10,
    size : 5,
    fps  : 1000
  };
  
  if (typeof conf == 'object') {
    for (var key in conf) {
      if (conf.hasOwnProperty(key)) {
        this.conf[key] = conf[key];
      }
    }
  }
  
};

Component.Snake = function(canvas, conf) {
  
  this.stage = new Component.Stage(canvas, conf);
  
  this.initSnake = function() {
    
    for (var i = 0; i < this.stage.conf.size; i++) {
      
      this.stage.length.push({x: i, y:0});
		}
	};
  
  this.initSnake();
  
  this.initFood = function() {
		
    this.stage.food = {
			x: Math.round(Math.random() * (this.stage.width - this.stage.conf.cw) / this.stage.conf.cw), 
			y: Math.round(Math.random() * (this.stage.height - this.stage.conf.cw) / this.stage.conf.cw), 
		};
	};
  
  this.initFood();

  this.restart = function() {
    this.stage.length            = [];
    this.stage.food              = {};
    this.stage.score             = 0;
    this.stage.direction         = 'right';
    this.stage.keyEvent.pressKey = null;
    this.initSnake();
    this.initFood();
  };
};

Game.Draw = function(context, snake) {
  
  this.drawStage = function() {
    
    var keyPress = snake.stage.keyEvent.getKey(); 
    if (typeof(keyPress) != 'undefined') {
      snake.stage.direction = keyPress;
    }
    
		context.fillStyle = "white";
		context.fillRect(0, 0, snake.stage.width, snake.stage.height);
		
    var nx = snake.stage.length[0].x;
		var ny = snake.stage.length[0].y;
		
    switch (snake.stage.direction) {
      case 'right':
        nx++;
        break;
      case 'left':
        nx--;
        break;
      case 'up':
        ny--;
        break;
      case 'down':
        ny++;
        break;
    }
    
    if (this.collision(nx, ny) == true) {
      snake.restart();
      return;
    }
    
    if (nx == snake.stage.food.x && ny == snake.stage.food.y) {
      var tail = {x: nx, y: ny};
      snake.stage.score++;
      snake.initFood();
    } else {
      var tail = snake.stage.length.pop();
      tail.x   = nx;
      tail.y   = ny;	
    }
    snake.stage.length.unshift(tail);
    
    for (var i = 0; i < snake.stage.length.length; i++) {
      var cell = snake.stage.length[i];
      this.drawCell(cell.x, cell.y);
    }

    this.drawCell(snake.stage.food.x, snake.stage.food.y);
    
    context.fillText('Pontos: ' + snake.stage.score, 5, (snake.stage.height - 5));
  };
  
  this.drawCell = function(x, y) {
    context.fillStyle = 'rgb(109, 62, 156)';
    context.beginPath();
    context.arc((x * snake.stage.conf.cw + 6), (y * snake.stage.conf.cw + 6), 4, 0, 2*Math.PI, false);    
    context.fill();
  };
  
  this.collision = function(nx, ny) {  
    if (nx == -1 || nx == (snake.stage.width / snake.stage.conf.cw) || ny == -1 || ny == (snake.stage.height / snake.stage.conf.cw)) {
      return true;
    }
    return false;    
	}
};

Game.Snake = function(elementId, conf) {
  
  // Sets
  var canvas   = document.getElementById(elementId);
  var context  = canvas.getContext("2d");
  var snake    = new Component.Snake(canvas, conf);
  var gameDraw = new Game.Draw(context, snake);
  
  setInterval(function() {gameDraw.drawStage();}, snake.stage.conf.fps);
};

window.onload = function() {
  var snake = new Game.Snake('stage', {fps: 100, size: 4});
};
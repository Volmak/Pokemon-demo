
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

var level = 1;
var subLevel = 1;
var zone = 1;
		
var screenTop = 100;
var screenRight = 0;
var step = 5;
var maxRight = 0;
var maxLeft;
		
var actions = {
	movingLeft: false,
	movingRight: false,
	jumping: false,
	movingDown: false,
	attacking: false,
	special: false,
};

var points = 0;			//Damn... The amount of php that has to be added to protect the values ...
var gameOver = false;

var player = new Pikachu();
var zombies = new Zombies();
var obstacles = new Obstacles();
var collectables = new Collectables();
var preloader = new Preloader();
var background = new Background();
var action = new Action();
var pokeballs = new Pokeballs();

background.map = maps.bg111;
action.map = maps.main111;
maxLeft = maxRight - action.totalWidth + action.width;

var song = document.getElementById('song');

gameLoop();

function gameLoop ()
{
	render();
	if(actions.movingLeft != actions.movingRight){
		player.move(screenRight <= maxLeft, screenRight >= maxRight, actions.movingLeft, actions.movingRight);
	} else {
		player.idle();
	}
	player.fall();
	if (actions.jumping) { player.jump(); }
	
	player.takeBonuses();
	zombies.takeRandomAction();
	pokeballs.autoshooter();
	
	if(screenRight < -44500 && player._x < 50){
		alert('You win');
		gameover();
	}
	song.play();
	
	if (gameOver) return;
//	setTimeout(function (){
		requestAnimationFrame(gameLoop);
//	},100)
}
	
function render()
{
	background.reflect(action.image);
	background.draw(screenRight, screenTop);
	collectables.reset();
	obstacles.reset();
	action.draw(screenRight,screenTop);
}
		
document.addEventListener('keydown', function (event) {
	onKeyEvent(event.keyCode, true);
}, false)
		
document.addEventListener('keyup', function (event) {
	onKeyEvent(event.keyCode, false);	
}, false)
	
function onKeyEvent (keyCode , state)
{	
	if(keyCode == LEFT){
		actions.movingLeft = state;
		player.turn(false);
	}
	if(keyCode == RIGHT){
		actions.movingRight = state;
		player.turn(true);
	}
	
	if(keyCode == UP){
		actions.jumping = state;
	}
	
//		if(keyCode == this.DOWN){
//
//		}
//		
//		if(keyCode == this.ATTACK){
//
//		}
//		
//		if(keyCode == this.SPECIAL){
//
//		}
}

function move (isLeft)
{
	if (screenRight >= maxLeft + step && isLeft){
		screenRight -= step;
	}
	if (screenRight < maxRight - step && !isLeft){
		screenRight += step;
	}
}

function gameover()
{
	gameOver = true;
	document.getElementById("game").style.display = 'none';
	document.getElementById('formSec').style.display = 'initial';
	
	document.getElementById('form').addEventListener('submit', function (e) {
		var playerName = document.getElementById('name').value;
		e.preventDefault();
		Ajax.request('POST', 'server/insert.php', true, function(r) {
			console.log(r);
			alert(r);
			window.location.replace("index.html");
		}, {name: playerName, score: points});
	}, false)
}
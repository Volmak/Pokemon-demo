/**
 * 
 */

class Pokeballs
{
	constructor ()
	{
		this.accuracy = 600;
		this.radius = 50;
		this.deathzones = [];
		this.times = [150,100,50];
		
		this.counter = 0;
		this.breakingPoint = 120;
		this.minimalInterval = 15;
	}
	
	shoot()
	{
		var x = Math.floor(Math.random() * this.accuracy);
		var y = Math.floor(Math.random() * this.accuracy / 3);//* (this.accuracy - x) / 2);
		
		var i = Math.floor(Math.random() * this.times.length);
		var time = this.times[i];
		
		this.deathzones [this.deathzones.length] = {
				x: player.x + x * this.flip(), 
				y: player.y + y * this.flip(), 
				time: time, fullTime: time, r: this.radius
				};
	}
	
	autoshooter()
	{
		this.counter++;
		if (this.counter >= this.breakingPoint){
			this.shoot();
			this.counter = 0;
			if(this.breakingPoint > this.minimalInterval){
				this.breakingPoint--;
			}
		}
		this.animate();
	}
	
	animate()
	{
		for(let i in this.deathzones){
			if (!this.deathzones[i]){
				continue;
			}
			if (this.deathzones[i].time > 0){
				this.deathzones[i].time--;
				action.animateCircle(this.deathzones[i]);
			} else {
				if(this.doesCollide()){
					gameover();
				};
				delete this.deathzones[i];
			}
		}
	}
	
	doesCollide()
	{
		for(let i in this.deathzones){
		    var distX = Math.abs(this.deathzones[i].x - player.x-player._width/2);
		    var distY = Math.abs(this.deathzones[i].y - player.y-player._height/2);

		    if (distX > (player._width/2 + this.deathzones[i].r)) { return false; }
		    if (distY > (player._height/2 + this.deathzones[i].r)) { return false; }

		    if (distX <= (player._width/2)) { return true; } 
		    if (distY <= (player._height/2)) { return true; }

		    var dx=distX-player._width/2;
		    var dy=distY-player._height/2;
		    return (dx*dx+dy*dy<=(this.deathzones[i].r*this.deathzones[i].r));
		}
	}
	
	flip ()
	{
		 return Math.random() < 0.5 ? 1 : -1;
	}
	
	fixXPos(step)
	{
		for(let i in this.deathzones){
			this.forceMoveX(this.deathzones[i], step);
		}
	}
	
	fixYPos(step)
	{
		for(let i in this.deathzones){
			this.forceMoveY(this.deathzones[i], step);
		}
	}
	
	forceMoveX(ball, step)
	{
		ball.x += step;
	}
	
	forceMoveY(ball, step)
	{
		ball.y += step;
	}
}
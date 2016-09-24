/**
 * 
 */

class Collectables extends Objects
{
	constructor()
	{
		super();
		this._animation = {
				x : 0,
				y : 0,
				start: 0,
				step : 100,
				max : 900,
				h : 100,
				frames: 0,
				maxFrames: 5,
		}
	}
	
	addNewObject(x, y, right, bottom, i, j, ltr)
	{
		super.addNewObject();
		this._objects[this._objects.length] = [x, y, right, bottom, i, j, ltr];
	}
	
	animate(i, obj)
	{
			action.animate(obj[i][0], obj[i][1], this._animation.step, this._animation.h, 
					preloadedImages[obj[i][6]], false, this._animation);
	}
	
	nextFrame()
	{
		if (this._animation.frames < this._animation.maxFrames){
			this._animation.frames++;
			return;
		}
		this._animation.frames = 0;
		if (this._animation.x >= this._animation.max){
			this._animation.x = this._animation.start;
		} else {
			this._animation.x += this._animation.step;
		}
	}
	
	doesCollide(x, y, right, bottom)
	{
		var obj = this._objects
		for(var i in obj){
			if (obj[i][0] < right && obj[i][1] < bottom && obj[i][2] > x && obj[i][3] > y) {
				player.getBonus(obj[i][6]);
				action.clearIndex (obj[i][4], obj[i][5]);
			}
			this.animate(i, obj);
		}
		this.nextFrame();
	}
}
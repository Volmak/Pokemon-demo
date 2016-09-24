/**
 * This class greates and runs the background of the game.
 */

class Action extends Canvas
{
	constructor () { 
		super(); 
		this.extraAction = true;
		this._tileW = 100;
		this._tileH = 100;
	}
	
	get tileW()
	{
		return this._tileW;
	}
	
	get tileH()
	{
		return this._tileH;
	}

	get image()
	{
		return this.canvas;
	}
	
	clearIndex(i,j)
	{
		this.map[i][j] = '';
	}
	
	draw(x,y)
	{
		this.ctx.clearRect(0,0, this.width, this.height);
		super.draw(x,y);
	}
	
	determineFate(ltr, x, y, i, j)
	{
		var numberPart = ltr.match(/[0-9]+$/);
		if (numberPart){
			zombies.addZombie(x, y, numberPart[0], ltr);
			this.clearIndex(i,j);
		} else  if (ltr.match(/^[A-z]$/)){
			obstacles.addNewObject(x, y, x + this._tileW, y + this._tileH);
			this.ctx.drawImage(preloadedImages[ltr], x, y, this._tileW, this._tileH);
		} else {
			collectables.addNewObject(x, y, x + this._tileW, y + this._tileH, i, j, ltr);
		}
	}
	/**
	 * params = x,y,time,fullTime,r;
	 */
	animateCircle(params)
	{
		this.ctx.strokeStyle = "#FFFFFF";
		this.ctx.beginPath();
		this.ctx.arc(params.x, params.y, params.r, 0, 2*Math.PI);
		this.ctx.stroke();
		
		if(params.time < pokeballs.times[2]){
			this.ctx.strokeStyle = "#FF0000";
		} else if(params.time < pokeballs.times[1]){
			this.ctx.strokeStyle = "#FFFF00";
		}else{
			this.ctx.strokeStyle = "#00FF00";
		}
		this.ctx.beginPath();
		this.ctx.arc(params.x, params.y, params.r * params.time / params.fullTime, 0, 2*Math.PI);
		this.ctx.stroke();
	}
	
	animate(x, y, width, height, img, rotate, state)
	{
		var frame = rotate ? state.x + state.reverse : state.x;
		this.ctx.clearRect(x, y, width, height);
		this.ctx.drawImage(img, frame, state.y, state.step, state.h, x, y, width, height);
	}
}
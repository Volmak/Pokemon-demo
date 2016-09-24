/**
 * Parent class for all Canvas classes
 */

class Canvas
{
	constructor()
	{
		this._y0 = window.innerHeight - 800;
		this._map = [];
		this.extraAction = false;
		
		this.canvas = document.createElement('CANVAS');
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		document.getElementById("game").appendChild(this.canvas);
		
		this.ctx = this.canvas.getContext("2d");
	}
	
	set map (array)
	{
		this._map = array;
	}
	
	get map()
	{
		return this._map;
	}
	
	get width()
	{
		return this.canvas.width;
	}
	
	get height()
	{
		return this.canvas.height;
	}
	
	get totalWidth()
	{
		return this.map[0].length * this._tileW;
	}
	
	get widthIndex()
	{
		this.map.reduce(function(a,i,ii){
		  if (ii === 1){
		    return a;
		  };
		  if (i.length > a.length){
		    return i;
		  }
		  return a;
		})
	}
	
	draw (x,y)
	{
		
		var startJ = this.map[0].length - 1 + parseInt((x - this.canvas.width) / this._tileW);
		var startI = parseInt(y /this._tileH);
		var stopJ = this.map[0].length - x / this._tileW;
		var stopI = (y + this.canvas.height - this._y0) /this._tileH;
		var drawX;
		var drawY;

		var i0 = 0;
		for (let i = startI; i < stopI; i++, i0++){
			var j0 = 0;
			for(let j = startJ; j <= stopJ; j++, j0++){
				if (!this.map[i][j]){
					continue;
				}
				var ltr = this.map[i][j];
				drawX = -((x - this.canvas.width) % this._tileW) - this._tileW + j0 * this._tileW;
				drawY = -(y % this._tileH) + i0 * this._tileH + this._y0;

				if(this.extraAction){
					this.determineFate(ltr, drawX, drawY, i, j);
				} else {
//					this.ctx.drawImage(preloadedImages[ltr],0,0, this._tileW, this._tileH, drawX, drawY, this._tileW, this._tileH);
					this.ctx.drawImage(preloadedImages[ltr], drawX, drawY, this._tileW, this._tileH);
				}
			}
		}
	}
	
	alert()
	{
		alert('I am here!');
	}
}
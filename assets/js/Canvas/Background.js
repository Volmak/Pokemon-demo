/**
 * This class greates and runs the background of the game.
 */

class Background extends Canvas
{
	constructor ()
	{ 
		super(); 

		this._tileW = 440;
		this._tileH = 800;
		this.speed = 0.8;
	}
	
	reflect(img)
	{
		var view = this.getReflect();
		if (view){
			this.ctx.drawImage(view,0,0, this.width, this.height);
		}
		this.ctx.drawImage(img,50,20, this.width - 80, this.height - 40);
	}
	
	getReflect()
	{
		// level . sublevel					//problematic? ___yep
		if (screenRight < -2700 && screenRight > -20500){
			return preloadedImages['ndk-central-view'];
		}
		if (screenRight < -30000 && screenRight > -48000){
			return preloadedImages['ndk-side-view'];
		}
	}
	
	draw(x,y)
	{
		super.draw(parseInt(x * this.speed), parseInt(y * this.speed));
	}
}
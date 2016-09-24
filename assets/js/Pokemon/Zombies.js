/**
 * 
 */

class Zombies
{
	constructor()
	{	
		this._zombies = [];
	}
	
	addZombie(x, y, numberPart, ltr)
	{
		this._zombies[this._zombies.length] = new Zombiemon(x, y, numberPart, ltr);
	}
	
	fixXPos(step)
	{
		for(let i in this._zombies){
			this._zombies[i].forceMoveX(step);
		}
	}
	
	fixYPos(step)
	{
		for(let i in this._zombies){
			this._zombies[i].forceMoveY(step);
		}
	}
	
	takeRandomAction()
	{
		for(let i in this._zombies){
			if (this._zombies[i].isDead){
				continue;
			}
			this._zombies[i].takeAction(this._zombies[i].params.idle);
		}
	}
	
	doesCollide(x, y, right, bottom)
	{
		var z = this._zombies
		for(var i in z){
			if (z[i].x < right && z[i].y < bottom && z[i].rightSide > x && z[i].botSide > y) {
				return true;
			}
		}
	}
}
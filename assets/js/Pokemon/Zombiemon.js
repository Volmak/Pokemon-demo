/**
 * 
 */

class Zombiemon extends Pokemon
{
	constructor(x, y, cp, ltr)
	{
		ltr = ltr.replace(/[0-9]/g, '');
		super(x, y - ZombieParams[ltr].idle.h + action.tileH, cp);
		
		this._image = new Image();
		this._image = preloadedImages[ltr];
		this._params = ZombieParams[ltr];
		
		this._isDead = false;
	}

	get params()
	{
		return this._params;
	}
	get isDead()
	{
		return this._isDead;
	}
	
	set isDead(bool)
	{
		this._isDead = bool;
	}
	
	forceMoveX(step)
	{
		this._x += step;
	}
	
	forceMoveY(step)
	{
		this._y += step;
	}
}
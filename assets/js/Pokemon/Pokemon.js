/**
 * 
 */

class Pokemon
{
	constructor(x, y, cp)
	{	
		this._x = x;
		this._y = y;
		this._cp = cp;
		this._width;
		this._height;
		this.facingRight = false;
		
		this.animationSlower = 0;
		this.animationSlowerMax = 8;
		
		this.fallSpeed = step;
		this.jumpCounter = 0;
		this.jumpH = 23;
		this.jumpSpeed = -(this.fallSpeed + step);
	}
	
	get x()
	{
		return this._x;
	}
	
	get y()
	{
		return this._y;
	}
	
	get rightSide()
	{
		return (this._x + 120); // this._width);  - no time for the hitbox before the deadline...
	}
	
	get botSide()
	{
		return (this._y + 100); // this._height); - fix after you add the hitbox
	}
	
	takeAction (params)
	{
		this._width = params.step;
		this._height = params.h;
		action.animate(this.x, this.y, this._width, this._height, this._image, this.facingRight, params);
		this.imagesSlower++;
		
		if (this.imagesSlower <= this.animationSlowerMax) {
			return
		}
		if (params.x >= params.max){
			params.x = params.start;
		} else {
			params.x += params.step;
			this.imagesSlower = 0;
		}
	}
	
	canMoveX(step)
	{
		if (obstacles.doesCollide(this._x + step, this._y, this.rightSide + step, this.botSide)){
			return false;
		}
		if (zombies.doesCollide(this._x + step, this._y, this.rightSide + step, this.botSide)){
			return false;
		}
		return true;
	}
	
	canMoveY(speed)
	{
		if (obstacles.doesCollide(this._x, this._y + speed, this.rightSide, this.botSide + speed)){
			return false;
		}
		if (zombies.doesCollide(this._x, this._y + step, this.rightSide, this.botSide+ step)){
			return false;
		}
		return true;
	}
	
	idle()
	{
		this.takeAction(this._idle);
	}
	
	fall()
	{
		if (this.canMoveY(this.fallSpeed)){
			this._y += this.fallSpeed;
			this.takeAction(this._fall);
		} else {
			this.jumpCounter = 0; //kogato padne mu se razreshava da skacha
		}
	}
	
	turn (right)
	{
		this.facingRight = right;
	}
}
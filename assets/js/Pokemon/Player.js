/**
 * 
 */

class Player extends Pokemon
{
	constructor()
	{
		super(window.innerWidth - 300, window.innerHeight - 200, 10);
		this.maxLeft = 200;
		this.maxRight = window.innerWidth - 300;
	}
	
	moveScreenX(step)
	{
		screenRight += step;
		zombies.fixXPos(-step);
		pokeballs.fixXPos(-step);
	}
	
	moveScreenY(step)
	{
		console.log(screenTop, step)
		screenTop += step;
		zombies.fixYPos(-step);
		pokeballs.fixYPos(-step);
	}
	
	move(maxLeft, maxRight, moveLeft, moveRight)
	{
		var before = this._x + screenRight;
		if (maxLeft && moveLeft && this._x - step > 0) { 
			this.canMoveX(-step) ? this._x -= step : null;
		} else if (maxRight && moveRight && this.rightSide + step < action.canvas.width) {
			this.canMoveX(step) ? this._x += step : null;
		} else if (moveLeft) {
			if (this._x > this.maxRight) {
				this.canMoveX(-step) ? this._x -= step : null;
			} else if (!maxLeft && this.canMoveX(-step)) {
				this.moveScreenX(-step);
				if (this._x + step < this.maxRight) {
					this._x += step;
					this.moveScreenX(-step);	
				}
			}
		} else if (moveRight) {
			if (this._x < this.maxLeft) {
				this.canMoveX(step) ? this._x += step : null;
			} else if (!maxRight && this.canMoveX(step)){
				this.moveScreenX(step);
				if (this._x - step > this.maxLeft) {
					this._x -= step;
					this.moveScreenX(step);
				}
			}
		}
		if (before != this._x + screenRight){
			this.takeAction(this._move);
		} else {
			this.idle();
		}
	}
	
	jump()
	{
		if (!this.canMoveY(this.jumpSpeed) || this.jumpCounter >= this.jumpH){
			return;
		}
		this._y += this.jumpSpeed;
//		this.moveScreenY(this.jumpSpeed);
		this.jumpCounter++;
		this.takeAction(this._jump);
	}
	
//	fall()
//	{
//		if (this.canMoveY(this.fallSpeed)){
//			this.moveScreenY(-this.fallSpeed);
//			this.takeAction(this._fall);
//		} else {
//			this.jumpCounter = 0; //kogato padne mu se razreshava da skacha
//		}
//	}
	
	takeBonuses()
	{
		collectables.doesCollide(this._x, this._y, this.rightSide, this.botSide)
	}
	
	getBonus(ltr)
	{
		switch(ltr){
		case '+': points++;
		}
	}
}
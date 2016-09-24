/**
 * 
 */

class Objects
{
	constructor()
	{
		this._objects = [];
	}
	
	addNewObject(index)
	{
	}
	
	reset()
	{
		this._objects = [];
	}
	
	doesCollide(x, y, right, bottom)
	{
		var obj = this._objects
		for(var i in obj){
			if (obj[i][0] < right && obj[i][1] < bottom && obj[i][2] > x && obj[i][3] > y) {
				return true;
			}
		}
	}
}
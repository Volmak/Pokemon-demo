/**
 * 
 */

class Obstacles extends Objects
{
	addNewObject(x, y, right, bottom)
	{
		super.addNewObject();

		this._objects[this._objects.length] = [x, y, right, bottom];
	}
}
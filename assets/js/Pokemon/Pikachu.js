/**
 * 
 */

class Pikachu extends Player
{
	constructor()
	{
		super()
		
		this._image = new Image();
		this._image = preloadedImages['p'];

		this._idle = {
				x : 0,
				y : 0,
				start: 0,
				step : 100,
				max : 400,
				h : 100,
				reverse : 750
		}
		this._move = {
				x : 0,
				y : 105,
				start : 0,
				step : 120,
				max : 480,
				h : 100,
				reverse : 750
		}
		this._fall = {
				x : 240,
				y : 105,
				start : 240,
				step : 120,
				max : 240,
				h : 100,
				reverse : 750
		}
		this._jump = {
				x : 0,
				y : 105,
				start : 120,
				step : 120,
				max : 120,
				h : 100,
				reverse : 750
		}
	}
}
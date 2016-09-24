/**
 * Used only for preloading images, Dont try to use this for any other purposes!
 */
var preloadedImages = {};

class Preloader
{
	
	constructor () {
		this.canvas = document.createElement('CANVAS');
		this.canvas.width = 0;
		this.canvas.height = 0;
		document.getElementById("game").appendChild(this.canvas);
		
		this.ctx = this.canvas.getContext("2d");
	}
	
	preload (map)
	{
		var checked = {};
		for(var row in map){
			for(var pos in map[row]){
				var code = map[row][pos].replace(/[0-9]/g, '');
				if (checked[code] || !code) {
					continue;
				}
				checked[code] = true;
				var image = new Image();
				image.src = "assets/images/" + code + ".png";
				preloadedImages[code] = image;
				this.ctx.drawImage(image,0,0);
			}
		}
	}
}
//  create js
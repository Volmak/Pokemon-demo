//
//var credits;
//var height;
//var y;
//var container;
//var maxTop;
//var maxBot;
		
document.addEventListener('DOMContentLoaded', function () {
	Ajax.request('GET', 'server/select.php', true, function(response) {
		createTable(response);
	});
}, false)

function createTable(resp)
{
	var r = JSON.parse(resp);
	var table = document.getElementById('addhere');
	for(var i in r){
		var row = document.createElement('tr');
		var placeTD = document.createElement('td');
		var nameTD = document.createElement('td');
		var scoreTD = document.createElement('td');

		placeTD.innerHTML = parseInt(i) + 1;
		nameTD.innerHTML = r[i].name;
		scoreTD.innerHTML = r[i].score;

		row.appendChild(placeTD);
		row.appendChild(nameTD);
		row.appendChild(scoreTD);
		
		table.appendChild(row);
		
//		credits = document.getElementById('credits');
//		height = credits.style.height;
//		y = credits.style.top;
//		container = document.getElementById('table-container');
//		maxTop = container.style.top;
//		maxBot = container.style.top + container.style.height;

		//gameLoop();
	}
}

//gameloop{
//	
//	requestAnimationFrame(gameLoop);
//}
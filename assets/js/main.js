$(document).ready(function(){

	var item = [];

	var race = ["white","hispanic","black","other"];
	var white = 32;
	var hispanic = 54;
	var black = 91;
	var other = 100;

	function addRace(){

		var randomRace = Math.floor(Math.random() * 100) + 1;
			
		if (randomRace <= white){
			item[1] = race[0];
			item[2] = "#FFDE7D";
		}
		else if (randomRace <= hispanic && randomRace > white){
			item[1] = race[1];
			item[2] = "#00B8A9";
		}
		else if (randomRace <= black && randomRace > hispanic){
			item[1] = race[2];
			item[2] = "#F6416C";
		}
		else if (randomRace <= other && randomRace > black){
			item[1] = race[3];
			item[2] = "#CCC"
		}
	}
	
	var crime = ["drugs","burglary","murder"];
	var drugs = 60;
	var burglary = 80;
	var murder = 100;

	function addCrime(){

		var randomCrime = Math.floor(Math.random() * 100) + 1;
			
		if (randomCrime <= drugs){
			item[0] = crime[0];
			//$(".list").prepend('<div class="item"><p>' + crime[0] + '</p></div><!---->');
		}
		else if (randomCrime <= burglary && randomCrime > drugs){
			item[0] = crime[1];
			//$(".list").prepend('<div class="item"><p>' + crime[1] + '</p></div><!---->');
		}
		else if (randomCrime <= murder && randomCrime > burglary){
			item[0] = crime[2];
			//$(".list").prepend('<div class="item"><p>' + crime[2] + '</p></div><!---->');
		}
	}


	function pushItem(){
		$(".list").append('<div class="item" style="background:' + item[2] + ' ;"><h2>' + item[0] + '</h2><p>' + item[1] + '</p></div><!---->');
	};

	var interval = 1500;
	setInterval(addCrime, interval);
	setInterval(addRace, interval);
	setInterval(pushItem, interval)


});
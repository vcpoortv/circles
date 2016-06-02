$(document).ready(function(){
	var i = 0;

	var crime = ["drugs","burglary","murder"];
	var drugs = 60;
	var burglary = 80;
	var murder = 100;

	function addCrime(){

			var randomCrime = Math.floor(Math.random() * 100) + 1;
			
			if (randomCrime <= drugs){
				$(".list").prepend('<div class="item"><p>' + crime[0] + '</p></div><!---->');
			}
			else if (randomCrime <= burglary && randomCrime > drugs){
				$(".list").prepend('<div class="item"><p>' + crime[1] + '</p></div><!---->');
			}
			else if (randomCrime <= murder && randomCrime > burglary){
				$(".list").prepend('<div class="item"><p>' + crime[2] + '</p></div><!---->');
			}
		}

	setInterval(addCrime, 2564);


});

//Create 4x4 grid of shapes, all in "off" state and "off" color.
function main() {
	var canvas = document.getElementById('canvas');
	var obj = canvas.getContext('2d');
	var blinkers = []; 
	var blinkers = [];
	var x=canvas.width*0.04;
	var y=canvas.height*0.04;
	var counter = 0;
	for (var i=1; i<=4; i++){
		for (var j=1; j<=4; j++){
			 counter = {x : x, y : y, state : 'off'};
			 blinkers.push(counter);
			counter++;
			obj.fillStyle="#264354";
			obj.fillRect(x, y, canvas.width*0.2, canvas.height*0.2);
			y+=canvas.width*0.24;
		}
		y=canvas.height*0.04;
		x+=canvas.width*0.24;
	}
	setInterval(blink, 250);

//Turn one "off" shape "on" every 250 milliseconds.
	function blink (){
		function test(item){
			return item.state === 'off';
			}			
		var offs = blinkers.filter(test);
		var turnOn = offs[(Math.floor(Math.random() * (offs.length-1)))];
		turnOn.state = 'on';
		setTimeout(blinkwait, 2000);
		obj.clearStyle;
		obj.fillStyle="#426176";
		obj.fillRect(turnOn.x, turnOn.y, canvas.width*0.2, canvas.height*0.2);
//Wait 2000 milliseconds and switch shape to "off" color and "wait" state.
	    function blinkwait (){
		    turnOn.state = 'wait';
		    obj.clearStyle;
		    obj.fillStyle="#264354";
		    obj.fillRect(turnOn.x, turnOn.y, canvas.width*0.2, canvas.height*0.2);
		    setTimeout(blinkoff, 2000);
//Wait 2000 ms and switch to "off" state, releasing it to be available for turn on, leaving "off" color.
			    function blinkoff(){
				    turnOn.state = 'off';
				
			    }
	    }
	}
}

main();


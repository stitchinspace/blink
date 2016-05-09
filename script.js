
/*Create 4x4 grid of shapes, all in "off" state and "off" color. 
Set main timer interval for 250 milliseconds.*/
function main() {
	var obj = document.getElementById('canvas').getContext('2d');
	var blinkers = []; 
	var x=canvas.width*0.04;
	var y=canvas.height*0.04;
	var counter = 0;
	for (var i=1; i<=4; i++){
		for (var j=1; j<=4; j++){
			 counter = {x : x, y : y, state : 'off'};
			 blinkers.push(counter);
			counter++;
			obj.fillStyle="rgb(31, 53, 90)";
			obj.fillRect(x, y, canvas.width*0.2, canvas.height*0.2);
			y+=canvas.width*0.24;
			}
		y=canvas.height*0.04;
		x+=canvas.width*0.24;
		}
	setInterval(blink, 250);

//Toggle one shape "on" every 250 milliseconds.
	function blink (){
		var offs = blinkers.filter(test);
		var toggle = offs[(Math.floor(Math.random() * (offs.length)))];
		var data = obj.getImageData(toggle.x, toggle.y, 1, 1).data;
		
		function test(item){
			return item.state === 'off';
			}
					   
		toggle.state = 'on';
		setTimeout(blinkoff, 2000);
				
		if (data[0]===31) {
			obj.fillStyle="rgb(26,93,115)";
			obj.fillRect(toggle.x, toggle.y, canvas.width*0.2, canvas.height*0.2);
			}
		else {
			obj.fillStyle="rgb(31, 53, 90)";
			obj.fillRect(toggle.x, toggle.y, canvas.width*0.2, canvas.height*0.2);
			}


//Wait 2000 ms and switch to "off" state, releasing it to be available for turn on, leaving "off" color.
			    function blinkoff(){
				    toggle.state = 'off';			
					}
	    }

	}

main();


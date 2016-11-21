var sceneManager;
var canvas;
var ctx;

function main()
{
	canvas = initCanvas();
	ctx = canvas.getContext("2d");
	scenePlaying = new ScenePlaying();
	scenePlaying.Start();
	scenePlaying.update();
	update();
	draw();
	//document.addEventListener("mousedown", changeScene);
}

function update()
{
	scenePlaying.update();
	window.requestAnimationFrame(update);
}

function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	scenePlaying.draw(ctx);
	window.requestAnimationFrame(draw);
}

function initCanvas()
{
	var c = document.getElementById("myCanvas");
	c.width = window.innerWidth;
	c.height = window.innerHeight;

	return c;
}


//get the char code for a key press for difrent browsers as diffrent browsers may return odd or diffrent key codes
function getCharCode(event)
{
	if (event.which == null)
	{
		return String.fromCharCode(event.keyCode) // IE
	}
	else if (event.which!=0 && event.charCode!=0)
	{
		return String.fromCharCode(event.which)   // the rest
	} 
	else
	{
		return event.keyCode; // special key
	}
}
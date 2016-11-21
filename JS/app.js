var sceneManager;
var canvas;
var ctx;

function main()
{
	canvas = initCanvas();
	ctx = canvas.getContext("2d");
	scenePlaying = new ScenePlaying(canvas);
	scenePlaying.update();
	document.addEventListener("mousedown", changeScene);
}

function update()
{
	scenePlaying.update();
	window.requestAnimationFrame(update);
}

function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	scenePlaying.draw();
	window.requestAnimationFrame(draw);
}

function initCanvas()
{
	var c = document.getElementById("myCanvas");
	c.width = window.innerWidth;
	c.height = window.innerHeight;

	return c;
}
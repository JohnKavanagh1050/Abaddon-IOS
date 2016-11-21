
function ScenePlaying()
{
	this.title = "Playing";
	this.player = new Player(100, 100, "Images/Player.png");
}

ScenePlaying.prototype.update = function()
{
	this.player.update();
}

ScenePlaying.prototype.draw = function()
{
	this.player.draw(canvas);
}

PlayingScene.prototype.handelInput = function(event)
{
	var key = getCharCode(event);
	if(key == 68 || key == 39)
	{
		this.player.moveRight();

	}
	if(key == 65 || key == 37)
	{
		this.player.moveLeft();
	}
	if(key == 87 || key == 38)
	{
		this.player.moveUp();
	}
	if(key == 83 || key == 40)
	{
		this.player.moveDown();
	}

}

PlayingScene.prototype.handelReleaseInput = function(event)
{
	var key = getCharCode(event);
	if(key == 68 || key == 39)
	{
		this.player.stopRight();

	}
	if(key == 65 || key == 37)
	{
		this.player.stopLeft();
	}
	if(key == 87 || key == 38)
	{
		this.player.stopUp();
	}
	if(key == 83 || key == 40)
	{
		this.player.stopDown();
	}

}

ScenePlaying.prototype.Start = function()
{
	var self = this;
	window.addEventListener("keydown", function(evt)
	{
		self.handelInput(evt)
	}, false);
	window.addEventListener("keyup", function(evt)
	{
		self.handelReleaseInput(evt)
	}, false);

}

ScenePlaying.prototype.Stop = function()
{
	window.removeEventListener("keydown",this.handelInput);
	ctx.clearRect(0,0,1000,1000);
}
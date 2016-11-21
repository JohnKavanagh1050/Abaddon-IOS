ScenePlaying.prototype = new Scene(); //Inherit from Scene

function ScenePlaying()
{
	this.title = "Playing";
	
}

ScenePlaying.prototype.update = function()
{
	
}

ScenePlaying.prototype.draw = function(ctx)
{
	
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
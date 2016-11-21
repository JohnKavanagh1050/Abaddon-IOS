
function Scene()
{
	this.title = "ParentScene";
}



Scene.prototype.update = function()
{
	game.ctx.fillText("Current Scene = " + this.title, 600, 300);

}

Scene.prototype.draw = function(ctx)
{
	
}

Scene.prototype.Start = function()
{

}
Scene.prototype.Stop = function()
{
	
}
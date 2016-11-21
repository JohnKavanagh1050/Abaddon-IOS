SceneMainMenu.prototype = new Scene(); //inherit from Scene

function SceneMainMenu()
{
	isStart = false;
	this.title = "Main Menu";
	this.buttonGame = new button("Start",canvas.width/2,300);
	//this.buttonOption = new button("Options",canvas.width/2,400)
	this.buttonExit = new button("Exit",canvas.width/2,500)
	this.cursorX;
	this.cursorY;
	this.backgroundImage = new Image();
	this.backgroundImage.src = 'Assets/menuTemp.png'
}

SceneMainMenu.prototype.update = function()
{
	if(this.buttonGame.intersects(new Rect(this.cursorX,this.cursorY,2,2)))
    {
    	isStart = true;
    }
}

SceneMainMenu.prototype.draw = function(ctx)
{
	ctx.drawImage(this.backgroundImage, 0,0,1000,1000);
	this.buttonGame.draw(canvas)
	//this.buttonOption.draw(canvas)
	this.buttonExit.draw(canvas)
}

SceneMainMenu.prototype.Start = function()
{

}

SceneMainMenu.prototype.Stop = function()
{
	ctx.clearRect(0,0,1000,1000);
}
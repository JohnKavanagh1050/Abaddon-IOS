function button(name,posx,posy)
{
	this.name = name;

	this.size = 75;
	this.width = 275;
	this.height = 75

	this.x = posx - (this.width / 2);
	this.y = posy - (this.height / 2);
	
	this.rect = new Rect(this.x ,this.y,this.width,this.height);
}

button.prototype.Init = function()
{
	
}

button.prototype.draw = function()
{
	ctx.font = "40px Verdana"
	ctx.fillText(this.name,this.x,this.y);
	ctx.fillStyle = rgb(128,0,128,0) ;
	ctx.strokeRect(this.x,this.y+this.rect.height/2,this.rect.width,-this.rect.height);
	
}
button.prototype.intersects = function (rect)
{
	right = false;
	left = false;
	up = false;
	down = false;

	if (this.x < rect.x + this.size &&
   		this.x + this.size > rect.x &&
  		 this.y < rect.y + this.size &&
  		 this.size + this.y > rect.y) 
	{
		//do stuff
	}

}
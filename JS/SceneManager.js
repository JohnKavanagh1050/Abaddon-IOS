
function SceneManager()
{
	this.sceneMainMenu = new SceneMainMenu();
	this.scenePlaying = new ScenePlaying();
	this.sceneArray = [this.sceneMainMenu, this.scenePlaying]
	this.sceneArrayIndex = 0;
	this.currentScene = this.sceneArray[this.sceneArrayIndex];
}

SceneManager.prototype.AddScene = function(newScene)
{
	this.sceneArray.push(newScene);
}

SceneManager.prototype.CurrentScene = function()
{
	return this.currentScene;
}

SceneManager.prototype.GoToScene = function(sceneIndex)
{
	this.currentScene.Stop();
	this.currentScene = this.sceneArray[sceneIndex];
	this.currentScene.Start();
}

SceneManager.prototype.GoToNextScene = function()
{
	this.currentScene.Stop();
	this.sceneArrayIndex++;
	if (this.sceneArrayIndex == this.sceneArray.length) 
	{
		this.sceneArrayIndex = 0;
	}
	this.currentScene = this.sceneArray[this.sceneArrayIndex];
	this.currentScene.Start();
}
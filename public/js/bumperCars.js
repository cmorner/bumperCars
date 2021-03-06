var bc = bc || {};

bc.main = (function () {
	var obj = {};
	var framesPerSecond = 30;
	// Calculate intervalSpace to achieve desired fps
	var interValSpace = 1000/framesPerSecond;

	var currentInterval;


	obj.init = function () {
		// Attach handlers for key events
		bc.controls.bindKeyEvents();
		currentInterval = setInterval(this.gameLoop, interValSpace);
	}

	obj.gameLoop = function () {
		var currentDirection = bc.controls.getCurrentDirection();
		console.log('currentDirection: ', currentDirection);
		bc.myCar.moveCar(currentDirection);
		//bc.myCar.applyFriction();
		bc.canvas.drawGame();
	}

	return obj;
})();

// Start gameLoop
bc.main.init();
bc.main.gameLoop();
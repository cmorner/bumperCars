var bc = bc || {};

bc.main = (function () {
	var obj = {};

	obj.init = function () {
		// Attach handlers for key events
		bc.controls.bindKeyEvents();
	}

	obj.gameLoop = function () {
		bc.canvas.drawGame();
	}

	return obj;
})();

// Start gameLoop
bc.main.init();
bc.main.gameLoop();
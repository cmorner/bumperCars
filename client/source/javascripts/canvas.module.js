var bc = bc || {};

bc.canvas = (function () {
	var obj = {};

	// Get 2d context
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	// Get canvas dimensions specified on the canvas element width and height attributes
	var width = canvas.width;
	var height = canvas.height;

	// Function to draw background
	obj.drawBg = function (color, strokeColor) {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, width, height);
		ctx.strokeStyle = strokeColor;
		ctx.strokeRect(0, 0, width, height);
	}

	// Function to draw car. direction not implemented
	obj.drawCar = function (direction, centerPoint, color, size) {
		// Calculate where to start drawing the car
		// This should probably be moved to myCar module
		var startPointX = centerPoint.x - ((size.length - 1)/2);
		var startPointY = centerPoint.y - ((size.width - 1)/2);

		// Draw car
		ctx.fillStyle = color;
		//ctx.rotate(20*Math.PI/180);
		ctx.fillRect(startPointX, startPointY, size.length, size.width);
	}

	// Draw game area
	obj.drawGame = function () {
		this.drawBg('#FFF', '#999');
		this.drawCar(1, bc.myCar.getPosition(), '#f50000', bc.myCar.getSize());
	}

	return obj;
})();
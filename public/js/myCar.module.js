var bc = bc || {};

bc.myCar = (function () {
	var obj = {};

	// Car size in pixels
	// The dimensions need to allow for a center pixel
	var carSize = {
		length: 41,
		width: 26
	};

	// Current position in coordinates
	var currentCenterPosition = {
		x: 40,
		y: 40
	};

	// The two vectors for movement in X
	// These vectors will be used to calculate the movement of the car
	// The resulting vector will be converted to a number of pixels
	// of movement
	// Pressing any of the arrows will change the vectors by a specific amount
	var carVectors = {
		x: 0,
		y: 0
	};

	// Calculate new centerPosition for the next frame based on current carVectors
	// calculate vectors to changes in pixels of currentCenterPosition
	obj.calculateNewCenterPosition = function () {
	}

	// Handles user input relating to the direction of the car
	obj.directionInputHandler = function (direction) {
		// How much the carVectors are changed
/*		var accelerationConstant = 0.6;
		var maxSpeed = 4; // Max speed change of pixels per frame
		switch (direction) {
			case 'left':
				if (Math.abs(carVectors.x) < maxSpeed){
					carVectors.x = carVectors.x - accelerationConstant;
				}
				break;
			case 'up':
				if (Math.abs(carVectors.y) < maxSpeed){
					carVectors.y = carVectors.y - accelerationConstant;
				}
				break;
			case 'right':
				if (Math.abs(carVectors.x) < maxSpeed){
					carVectors.x = carVectors.x + accelerationConstant;
				}
				break;
			case 'down':
				if (Math.abs(carVectors.y) < maxSpeed){
					carVectors.y = carVectors.y + accelerationConstant;
				}
				break;
		}*/

		switch (direction) {
			case 'left'
		}

		console.log(direction);
		// Changes carVectors based upon which direction is received
		// Make sure the car wont override its speedLimit or maybe there shouldn't be one :)
	}

	// Affect vectors with friciton
	obj.applyFriction = function () {
		// Decides how much the car will break when no force is applied
		var frictionConstant = 0.2;
		// Apply friction in the opposite way of traveling distance
		// only apply if car is standing still (vector is 0)
		if (carVectors.x < 0){
			carVectors.x += frictionConstant;
		} else if (carVectors.x > 0) {
			carVectors.x -= frictionConstant;
		}

		if (carVectors.y < 0){
			carVectors.y += frictionConstant;
		} else if (carVectors.y > 0) {
			carVectors.y -= frictionConstant;
		}

		// If carVector is under frictionConstant the car will never stop
		if (Math.abs(carVectors.y) < frictionConstant) {
			carVectors.y = 0;
		}
 
		if (Math.abs(carVectors.x) < frictionConstant) {
			carVectors.x = 0;
		}
	}

	// Calculate new position of car based of current carVectors
	obj.moveCar = function () {
		currentCenterPosition.x += carVectors.x;
		currentCenterPosition.y += carVectors.y;
	
	}

	// Returns an position object
	obj.getPosition = function () {
		return currentCenterPosition;
	}

	// Return car size
	obj.getSize = function () {
		return carSize;
	}

	return obj;
})();
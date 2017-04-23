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
		console.log(direction);
		// Changes carVectors based upon which direction is received
		// Make sure the car wont override its speedLimit or maybe there shouldn't be one :)
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
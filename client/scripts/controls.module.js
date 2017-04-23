var bc = bc || {};

bc.controls = (function () {
	var obj = {};

	// Bind functions to key Events
	obj.bindKeyEvents = function () {
		document.onkeydown = function (e) {
			switch (e.keyCode) {
				case 37: // Left arrow
					bc.myCar.directionInputHandler('left');
					break;
				case 38: // up arrow
					bc.myCar.directionInputHandler('up');
					break;
				case 39:
					bc.myCar.directionInputHandler('right');
					break;
				case 40:
					bc.myCar.directionInputHandler('down');
					break;
			}
		}
	}

	return obj;
})();
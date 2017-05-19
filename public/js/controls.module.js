var bc = bc || {};

bc.controls = (function () {
	var obj = {};


	// an object with arrow properties with boolean values
	// True means the key is currently pressed 
	var keysPressed = {
		left: false,
		up: false,
		right: false,
		down: false
	};

	// Bind functions to key Events
	obj.bindKeyEvents = function () {
		document.onkeydown = function (e) {
			console.log(e.keyCode);
			switch (e.keyCode) {
				case 37: // Left arrow
					keysPressed.left = true;
					break;
				case 38: // up arrow
					keysPressed.up = true;
					break;
				case 39: // right arrow
					keysPressed.right = true;
					break;
				case 40: // down arrow
					keysPressed.down = true;
					break;
				case 13: // Enables Enter to be used to send messages if message input is active
					var chatMessage = document.getElementById('chat-message');
					// If the currrent selected element is the message input send the message
					if (chatMessage === document.activeElement) {
						sendMessage();
					}
			}
		}
		document.onkeyup = function (e) {
			switch (e.keyCode) {
				case 37: // Left arrow
					keysPressed.left = false;
					break;
				case 38: // up arrow
					keysPressed.up = false;
					break;
				case 39:
					keysPressed.right = false;
					break;
				case 40:
					keysPressed.down = false;
					break;
			}
		}
	}


	obj.getCurrentDirection = function () {
		var o = keysPressed;

		if (o.left) {
			if (o.up) return 'left/up';
			if (o.right) return 'none';
			if (o.down) return 'left/down';
			return 'left';
		}
		if (o.up) {
			if (o.right) return 'right/up';
			if (o.down) return 'none';
			return 'up';
		}
		if (o.right) {
			if (o.down) return 'right/down';
			return 'right'
		}
		if (o.down) return 'down';
		return 'none';
	}

	return obj;
})();
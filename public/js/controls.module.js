var bc = bc || {};

bc.controls = (function () {
	var obj = {};




	// Bind functions to key Events
	obj.bindKeyEvents = function () {
		document.onkeydown = function (e) {
			console.log(e.keyCode);
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
				case 13: // Enables Enter to be used to send messages if message input is active
					var chatMessage = document.getElementById('chat-message');
					// If the currrent selected element is the message input send the message
					if (chatMessage === document.activeElement) {
						sendMessage();
					}
			}
		}
	}

	return obj;
})();
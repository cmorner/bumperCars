var socket = io();

socket.connect('http://localhost:3000');

var sendMessage = function () {
	var messageInput = document.getElementById('chat-message');
	var message = messageInput.value;
	messageInput.value = ''; // Clear message input

	var alias = document.getElementById('chat-name').value;

	socket.emit('chat message', {name: alias, message: message});
	console.log('send message');
}


// When a message is received
// messageObj: {name, message}
var publishReceivedMessage = function (messageObj) {
	// Create message wrapper
	var message = document.createElement('div');
	message.className = 'message';

	// Create message chat name wrapper
	var messageChatName = document.createElement('span');
	messageChatName.className = 'message-chat-name';
	messageChatName.innerHTML = messageObj.name + ': ';

	// Span to hold message text
	var messageText = document.createElement('span');
	messageText.innerHTML = messageObj.message;

	// append elements within each other
	message.appendChild(messageChatName);
	message.appendChild(messageText);

	// Append message first to messageboard
	var messageArea = document.getElementById('messages-area');
	messageArea.insertBefore(message, messageArea.firstChild);

}

socket.on('chat message', publishReceivedMessage);

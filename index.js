// Server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// Serve static files
app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log('a user connected');
	
	// When a user disconnects
	socket.on('disconnect', function () {
		console.log('user disonnected');
	});

});

// When someone sends a message
// receives {name, message}
io.on('connection', function (socket) {
  socket.on('chat message', function(msg){
    console.log('received a message: ' + msg.name + ' ' + msg.message);
    io.emit('chat message', msg);
  });
});


http.listen(3000, function () {
	console.log('listening on *:3000');
});
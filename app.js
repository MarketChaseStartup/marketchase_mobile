var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var directory = __dirname + '/web';
var port = 3001;
var websocket;


app.use(express.static(__dirname + '/web'));



io.on('connection', function(socket){
	console.log('user connected');
	websocket = socket;
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});


	socket.on('deviceControl', function(data){console.log(data)
		socket.broadcast.emit('carControl', data);
	})
});



http.listen(port, function(){
	console.log('Listening on port '+port);
});

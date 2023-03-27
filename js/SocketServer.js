const WebSocket = require('ws');

// Create a new WebSocket server
const wss = new WebSocket.Server({ port: 8081 });

// Event handler for incoming connections
wss.on('connection', function(socket) {
  console.log('WebSocket connection established');
  // Event handler for incoming messages from the client



  // Event handler for when the connection is closed
  socket.on('close', function() {
    console.log('WebSocket connection closed');
  });
});

socket.on('message', function(message) {
  console.log(`Received message from client: ${message}`);
  var obj = {
      bot: "Hello from Bot",
  }
  // Send a response message back to the client
  socket.send(JSON.stringify(obj));
});

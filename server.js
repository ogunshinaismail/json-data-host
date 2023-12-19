const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8000 });

// Event handler for when a client connects
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Event handler for when a client sends a message
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Echo the received message back to the client
    ws.send(`Server: ${message}`);
  });

  // Event handler for when a client disconnects
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

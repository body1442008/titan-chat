const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3001 });

let clients = {};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    let msg = JSON.parse(message);
    if (msg.type === 'register') {
      clients[msg.userId] = ws;
      return;
    }
    if (msg.to && clients[msg.to]) {
      clients[msg.to].send(JSON.stringify({ from: msg.from, data: msg.data }));
    }
  });

  ws.on('close', () => {
    for (let id in clients) if (clients[id] === ws) delete clients[id];
  });
});

console.log('Signaling server running on PORT', process.env.PORT || 3001);
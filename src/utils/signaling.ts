export class SignalingClient {
  ws: WebSocket;
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
    this.ws = new WebSocket('ws://localhost:3001'); // أو IP سيرفرك
    this.ws.onopen = () => {
      this.ws.send(JSON.stringify({ type: "register", userId }));
    };
  }

  send(to: string, data: any) {
    this.ws.send(JSON.stringify({ from: this.userId, to, data }));
  }

  onMessage(cb: (from: string, data: any) => void) {
    this.ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      cb(msg.from, msg.data);
    };
  }
}
export function sendLocation(ws: WebSocket, userId: string, coords: GeolocationCoordinates) {
  ws.send(JSON.stringify({
    type: "location",
    from: userId,
    data: { lat: coords.latitude, lng: coords.longitude, time: Date.now() }
  }));
}
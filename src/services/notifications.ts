// إشعارات فورية متقدمة
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

export async function requestPermissionAndToken() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
      return token;
    }
  } catch (e) {}
  return null;
}

export function listenToMessages(cb: (payload: any) => void) {
  onMessage(messaging, cb);
}
import { db } from "./firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

// إرسال رسالة
export async function sendMessage(chatId: string, msg: any) {
  await addDoc(collection(db, "chats", chatId, "messages"), msg);
}

// الاستماع للرسائل تلقائياً
export function listenMessages(chatId: string, cb: (msgs: any[]) => void) {
  const q = query(collection(db, "chats", chatId, "messages"), orderBy("time"));
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map(d => ({id: d.id, ...d.data()})));
  });
}
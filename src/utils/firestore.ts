import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ضع-API-KEY-هنا",
  authDomain: "xxx.firebaseapp.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function sendMessage(chatId: string, msg: any) {
  await addDoc(collection(db, "chats", chatId, "messages"), msg);
}

export function subscribeMessages(chatId: string, cb: (msgs:any[])=>void) {
  const q = query(collection(db, "chats", chatId, "messages"), orderBy("time"));
  return onSnapshot(q, snap => {
    cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}
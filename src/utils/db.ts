// تخزين كل شيء في localStorage (يمكنك لاحقًا استبداله بـ IndexedDB لو أردت حجم أكبر)
const DB_KEY = "titan_chats";

export type Message = {
  id: string;
  chatId: string;
  user: string;
  text: string;
  time: number;
  type?: "text"|"image"|"file"|"audio"|"sticker";
  fileUrl?: string;
  replyTo?: string;
  reactions?: { user: string, emoji: string }[];
};

export type Chat = {
  id: string;
  name: string;
  photo?: string;
  messages: Message[];
  unread: number;
};

export function getChats(): Chat[] {
  return JSON.parse(localStorage.getItem(DB_KEY) || "[]");
}
export function saveChats(chats: Chat[]) {
  localStorage.setItem(DB_KEY, JSON.stringify(chats));
}
export function addMessage(chatId: string, msg: Message) {
  const chats = getChats();
  const chat = chats.find(c => c.id === chatId);
  if (!chat) return;
  chat.messages.push(msg);
  chat.unread++;
  saveChats(chats);
}
export function createChat(chat: Chat) {
  const chats = getChats();
  chats.push(chat);
  saveChats(chats);
}
export function markRead(chatId: string) {
  const chats = getChats();
  const chat = chats.find(c => c.id === chatId);
  if (chat) chat.unread = 0;
  saveChats(chats);
}
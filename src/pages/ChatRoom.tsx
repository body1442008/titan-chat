import React from 'react';
import ChatHeader from '../components/Chat/ChatHeader';
import MessagesList from '../components/Chat/MessagesList';
import ChatInput from '../components/Chat/ChatInput';
import Sidebar from '../components/Shared/Sidebar';

export default function ChatRoom() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <ChatHeader />
        <MessagesList />
        <ChatInput />
      </div>
    </div>
  );
}
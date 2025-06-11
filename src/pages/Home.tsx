import React from 'react';
import { useTranslation } from 'react-i18next';
import ChatList from '../components/Chat/ChatList';
import Sidebar from '../components/Shared/Sidebar';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900">
        <ChatList />
        <div className="flex items-center justify-center h-full text-gray-400 text-xl">
          {t('appName')}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import SettingsPanel from '../components/Shared/SettingsPanel';
import Sidebar from '../components/Shared/Sidebar';

export default function Settings() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <SettingsPanel />
      </div>
    </div>
  );
}
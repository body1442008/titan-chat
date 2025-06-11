import React from 'react';
import ProfilePanel from '../components/Shared/ProfilePanel';
import Sidebar from '../components/Shared/Sidebar';

export default function Profile() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <ProfilePanel />
      </div>
    </div>
  );
}
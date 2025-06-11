// إدارة مجموعة متقدمة (عرض اسم وصورة وتعديل ودعوة)
import React from "react";

export default function GroupInfo({ group, onEdit, onInvite }: { group: any, onEdit: () => void, onInvite: () => void }) {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={group.photo} alt={group.name} className="w-20 h-20 rounded-full object-cover mb-2" />
      <h2 className="font-bold text-xl">{group.name}</h2>
      <button onClick={onEdit} className="mt-2 text-primary">Edit Group</button>
      <button onClick={onInvite} className="mt-1 text-blue-500">Invite Members</button>
    </div>
  );
}
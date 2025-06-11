// أفاتار مع أول حرفين من الاسم وصورة شخصية
import React from "react";

export default function Avatar({ name, photo, size = 40 }: { name: string, photo?: string, size?: number }) {
  if (photo)
    return <img src={photo} alt={name} style={{ width: size, height: size }} className="rounded-full object-cover" />;
  const initials = name.split(" ").map(x => x[0]).join("").substring(0, 2).toUpperCase();
  return (
    <div className="bg-primary text-white font-bold flex items-center justify-center rounded-full" style={{ width: size, height: size, fontSize: size / 2 }}>
      {initials}
    </div>
  );
}
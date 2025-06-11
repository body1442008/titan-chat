import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("يجب كتابة اسمك");
    localStorage.setItem("titan_user", JSON.stringify({ name, photo }));
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-primary via-blue-400 to-blue-200">
      <form className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-6 animate-fade-in-down"
        onSubmit={handleLogin}>
        <div className="flex flex-col items-center gap-2">
          <img src={photo || "/icon-192.png"} className="w-16 h-16 rounded-full shadow-lg object-cover" alt="avatar" />
          <input
            type="text"
            placeholder="اسمك"
            className="rounded-lg border px-4 py-2 focus:outline-primary text-center"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            placeholder="رابط صورتك (اختياري)"
            className="rounded-lg border px-4 py-2 focus:outline-primary text-center"
            value={photo}
            onChange={e => setPhoto(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-primary text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition shadow">دخول</button>
        {error && <div className="text-red-500 text-center">{error}</div>}
      </form>
    </div>
  );
}
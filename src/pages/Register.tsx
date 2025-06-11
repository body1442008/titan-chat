import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../services/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName });
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        name: displayName,
        email,
        photo: "",
        status: "online",
        lang: localStorage.getItem('lang') || 'en',
        theme: "system",
        createdAt: new Date(),
      });
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <form onSubmit={handleRegister} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary">{t('register')}</h2>
        {error && <div className="text-red-500 mb-3">{error}</div>}
        <input
          type="text"
          placeholder={t('profile')}
          className="input input-bordered w-full mb-4"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder={t('email')}
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('password')}
          className="input input-bordered w-full mb-4"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">{t('register')}</button>
        <div className="mt-4 flex justify-between items-center">
          <Link to="/login" className="text-primary">{t('login')}</Link>
        </div>
      </form>
    </div>
  );
}
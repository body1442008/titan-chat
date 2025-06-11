import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ChatRoom from "../pages/ChatRoom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Stories from "../pages/Stories";
import { useAuth } from "../contexts/auth-context";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center pt-12">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/chat/:id" element={<ProtectedRoute><ChatRoom /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="/profile/:uid" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/stories" element={<ProtectedRoute><Stories /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
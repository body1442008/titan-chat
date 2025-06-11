// تسجيل رسالة صوتية (مثل ماسنجر/تلجرام)
import React, { useState, useRef } from "react";

export default function VoiceRecorder({ onSend }: { onSend: (blob: Blob) => void }) {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    mediaRecorder.current.ondataavailable = (e) => chunks.current.push(e.data);
    mediaRecorder.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" });
      onSend(blob);
      chunks.current = [];
    };
    mediaRecorder.current.start();
    setIsRecording(true);
  };

  const stop = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  return (
    <div>
      {isRecording ? (
        <button onClick={stop} className="text-red-500">Stop & Send</button>
      ) : (
        <button onClick={start} className="text-primary">Record Voice</button>
      )}
    </div>
  );
}
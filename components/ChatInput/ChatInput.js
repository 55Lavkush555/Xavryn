'use client';

import { useState } from 'react';
import styles from './ChatInput.module.css';

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;

    console.log('Message:', message);

    setMessage('');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
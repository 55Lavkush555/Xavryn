'use client';

import { useState } from 'react';

import styles from './ChatInput.module.css';

export default function ChatInput({
  onSendMessage,
}) {
  const [message, setMessage] =
    useState('');

  const handleSend = () => {
    if (!message.trim()) return;

    onSendMessage(message);

    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
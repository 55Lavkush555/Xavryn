'use client';

import { useState } from 'react';

import styles from './ChatInput.module.css';

export default function ChatInput({
  onSendMessage,
}) {
  const [message, setMessage] =
    useState('');

  const handleSend = () => {
    const trimmed =
      message.trim();

    if (!trimmed) return;

    onSendMessage(trimmed);

    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Message..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
        className={styles.input}
      />

      <button
        onClick={handleSend}
        className={styles.sendButton}
        disabled={!message.trim()}
      >
        ➜
      </button>
    </div>
  );
}
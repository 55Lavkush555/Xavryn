'use client';

import { useState } from 'react';

import styles from './ChatInput.module.css';

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    onSendMessage(trimmed);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.iconBtn}
        aria-label="Add emoji"
      >
        😊
      </button>
      <button
        type="button"
        className={styles.iconBtn}
        aria-label="Attach file"
      >
        📎
      </button>

      <textarea
        rows={1}
        placeholder="Message…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
        aria-label="Type a message"
      />

      <button
        type="button"
        onClick={handleSend}
        className={styles.sendButton}
        disabled={!message.trim()}
        aria-label="Send message"
      >
        ➤
      </button>
    </div>
  );
}

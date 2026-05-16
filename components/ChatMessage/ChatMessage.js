'use client';

import styles from './ChatMessage.module.css';

function StatusTicks({ status }) {
  if (!status) return null;

  if (status === 'read') return <span className={styles.ticks}>✓✓</span>;
  if (status === 'delivered') return <span className={styles.ticks}>✓✓</span>;
  if (status === 'sent') return <span className={styles.ticks}>✓</span>;

  return null;
}

export default function ChatMessage({
  message,
  time,
  isOwnMessage = false,
  status,
}) {
  return (
    <div
      className={`${styles.messageWrapper} ${
        isOwnMessage ? styles.ownWrapper : styles.otherWrapper
      }`}
    >
      <div
        className={`${styles.messageBubble} ${
          isOwnMessage ? styles.ownBubble : styles.otherBubble
        }`}
      >
        <p className={styles.messageText}>{message}</p>
        <div className={styles.meta}>
          <span className={styles.messageTime}>{time}</span>
          {isOwnMessage && <StatusTicks status={status} />}
        </div>
      </div>
    </div>
  );
}

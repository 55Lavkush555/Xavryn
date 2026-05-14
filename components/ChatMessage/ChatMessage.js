'use client';

import styles from './ChatMessage.module.css';

export default function ChatMessage({
  message,
  time,
  isOwnMessage = false,
}) {
  return (
    <div
      className={
        isOwnMessage
          ? `${styles.messageWrapper} ${styles.ownWrapper}`
          : `${styles.messageWrapper} ${styles.otherWrapper}`
      }
    >
      <div
        className={
          isOwnMessage
            ? `${styles.messageBubble} ${styles.ownBubble}`
            : `${styles.messageBubble} ${styles.otherBubble}`
        }
      >
        <p className={styles.messageText}>
          {message}
        </p>

        <span className={styles.messageTime}>
          {time}
        </span>
      </div>
    </div>
  );
}
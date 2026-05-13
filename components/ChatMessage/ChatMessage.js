import styles from './ChatMessage.module.css';

export default function ChatMessage({
  message,
  time,
  isOwnMessage,
}) {
  return (
    <div
      className={`${styles.messageWrapper} ${
        isOwnMessage
          ? styles.ownWrapper
          : styles.otherWrapper
      }`}
    >
      <div
        className={`${styles.messageBubble} ${
          isOwnMessage
            ? styles.ownMessage
            : styles.otherMessage
        }`}
      >
        <p>{message}</p>

        <span>{time}</span>
      </div>
    </div>
  );
}
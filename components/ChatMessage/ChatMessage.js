import styles from './ChatMessage.module.css';

export default function ChatMessage({
  message,
  sender,
  time,
  isOwnMessage,
}) {
  return (
    <div
      className={`${styles.messageWrapper} ${
        isOwnMessage ? styles.own : styles.other
      }`}
    >
      <div className={styles.messageBubble}>
        <p>{message}</p>

        <span>{time}</span>
      </div>
    </div>
  );
}
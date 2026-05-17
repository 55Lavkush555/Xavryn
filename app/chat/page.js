import styles from './empty.module.css';

export default function ChatPage() {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>💬</div>
      <h2>Select a conversation</h2>
      <p>Pick a chat from the inbox to start messaging.</p>
    </div>
  );
}

import styles from './chat.module.css';

import ChatList from '@/components/ChatList/ChatList';

export default function ChatPage() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoX}>X</span>
          <span className={styles.logoText}>avryn</span>
        </div>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search conversations"
          />
        </div>

        <ChatList />
      </aside>

      {/* Main Area */}
      <main className={styles.main}>
        <div className={styles.emptyState}>
          <h2>Welcome to Xavryn</h2>

          <p>
            Select a conversation to start chatting
          </p>
        </div>
      </main>
    </div>
  );
}
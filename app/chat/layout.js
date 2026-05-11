import styles from './chat.module.css';

import ChatList from '@/components/ChatList/ChatList';

export default function ChatLayout({ children }) {
  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        {/* LOGO */}
        <div className={styles.logo}>
          <span className={styles.logoX}>X</span>

          <span className={styles.logoText}>
            avryn
          </span>
        </div>

        {/* NOTES */}
        <div className={styles.notesSection}>
          {[
            {
              emoji: '💭',
              text: 'Working on Xavryn UI',
            },
            {
              emoji: '⚡',
              text: 'New update tonight',
            },
          ].map((note, index) => (
            <div
              key={index}
              className={styles.noteCard}
            >
              <span>{note.emoji}</span>

              <p>{note.text}</p>
            </div>
          ))}
        </div>

        {/* SEARCH */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search conversations"
          />
        </div>

        {/* CHAT LIST */}
        <ChatList />
      </aside>

      {/* CHAT AREA */}
      <main className={styles.chatArea}>
        {children}
      </main>
    </div>
  );
}
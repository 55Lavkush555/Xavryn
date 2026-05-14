'use client';

import styles from './chat.module.css';

import ChatList from '@/components/ChatList/ChatList';
import Logo from '@/components/Logo/Logo';

const chats = [
  {
    id: 1,
    name: 'Lavkush',
    message: 'So finally it’s working!',
    time: '10:32 PM',
    online: true,
    avatar: 'L',
  },
  {
    id: 2,
    name: 'Sarah',
    message: 'The UI glow looks clean now.',
    time: '9:18 PM',
    online: false,
    avatar: 'S',
  },
  {
    id: 3,
    name: 'Alex',
    message: 'Need sockets next phase.',
    time: 'Yesterday',
    online: true,
    avatar: 'A',
  },
];

export default function ChatLayout({ children }) {
  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        {/* LOGO */}
        <div className={styles.logoWrapper}>
          <Logo size="medium" />
        </div>

        {/* INSTAGRAM STYLE NOTE */}
        <div className={styles.noteCard}>
          <div className={styles.noteAvatar}>Z</div>

          <div>
            <p className={styles.noteTitle}>Your Note</p>

            <p className={styles.noteText}>
              Building Xavryn tonight ⚡
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search conversations"
          className={styles.search}
        />

        {/* CHAT LIST */}
        <ChatList chats={chats} activeChatId="1" />
      </aside>

      {/* CHAT AREA */}
      <main className={styles.chatArea}>
        {children}
      </main>
    </div>
  );
}
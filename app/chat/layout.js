'use client';

import { usePathname } from 'next/navigation';

import styles from './chat.module.css';

import ChatList from '@/components/ChatList/ChatList';

import { chats } from '@/lib/chat';

export default function ChatLayout({
  children,
}) {
  const pathname = usePathname();

  const activeChatId =
    pathname.split('/')[2];

  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        {/* LOGO */}
        <div className={styles.logo}>
          <span className={styles.logoX}>
            X
          </span>

          <span className={styles.logoText}>
            avryn
          </span>
        </div>

        {/* INSTAGRAM STYLE NOTE */}
        <div className={styles.notesWrapper}>
          <div className={styles.noteCard}>
            <span
              className={styles.noteEmoji}
            >
              💭
            </span>

            <p>
              Building Xavryn UI
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search conversations"
          />
        </div>

        {/* CHAT LIST */}
        <ChatList
          chats={chats}
          activeChatId={activeChatId}
        />
      </aside>

      {/* CHAT AREA */}
      <main className={styles.chatArea}>
        {children}
      </main>
    </div>
  );
}
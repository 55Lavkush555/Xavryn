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

  const currentUser = {
    name: 'Zainab',
    username: '@zubithecoder',
  };

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

        {/* NOTES */}
        <div className={styles.notesSection}>
          {[
            {
              name: 'Lavkush',
              note:
                'Grinding Xavryn UI ⚡',
              avatar: 'L',
            },
            {
              name: 'Sarah',
              note:
                'Late night coding 🌙',
              avatar: 'S',
            },
            {
              name: 'Alex',
              note:
                'UI getting clean fr',
              avatar: 'A',
            },
          ].map((user, index) => (
            <div
              key={index}
              className={styles.noteBubble}
            >
              <div
                className={styles.noteAvatar}
              >
                {user.avatar}
              </div>

              <div
                className={styles.noteText}
              >
                <span>{user.name}</span>

                <p>{user.note}</p>
              </div>
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

        {/* CHATS */}
        <div className={styles.chatListWrapper}>
          <ChatList
            chats={chats}
            activeChatId={activeChatId}
          />
        </div>

        {/* PROFILE */}
        <div className={styles.profileCard}>
          <div className={styles.profileAvatar}>
            Z
          </div>

          <div className={styles.profileInfo}>
            <h4>{currentUser.name}</h4>

            <p>
              {currentUser.username}
            </p>
          </div>

          <button
            className={styles.settingsBtn}
          >
            ⚙
          </button>
        </div>
      </aside>

      {/* CHAT AREA */}
      <main className={styles.chatArea}>
        {children}
      </main>
    </div>
  );
}
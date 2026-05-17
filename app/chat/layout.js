'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import ChatGuard from '@/components/ChatGuard/ChatGuard';
import ChatList from '@/components/ChatList/ChatList';
import ChatSearch from '@/components/ChatSearch/ChatSearch';
import Logo from '@/components/Logo/Logo';
import NotesRow from '@/components/NotesRow/NotesRow';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { groups, notes } from '@/lib/chat';
import {
  getInboxSnapshot,
  getServerInboxSnapshot,
  parseInboxSnapshot,
} from '@/lib/inbox';
import { subscribeChats } from '@/lib/messages';
import {
  logout,
  parseUser,
  getUserSnapshot,
  subscribeSession,
} from '@/lib/session';
import { filterChats } from '@/lib/utils';

import styles from './chat.module.css';

export default function ChatLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const userSnapshot = useSyncExternalStore(
    subscribeSession,
    getUserSnapshot,
    () => null
  );
  const user = useMemo(
    () => parseUser(userSnapshot),
    [userSnapshot]
  );

  const inboxSnapshot = useSyncExternalStore(
    subscribeChats,
    getInboxSnapshot,
    getServerInboxSnapshot
  );
  const inboxChats = useMemo(
    () => parseInboxSnapshot(inboxSnapshot),
    [inboxSnapshot]
  );

  const filteredChats = useMemo(
    () => filterChats(inboxChats, search),
    [inboxChats, search]
  );

  const isConversation =
    pathname?.startsWith('/chat/') && pathname !== '/chat';

  const handleSignOut = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <ChatGuard>
      <div
        className={`${styles.chatPage} ${isConversation ? styles.inConversation : ''}`}
      >
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Logo size="medium" href="/chat" />
            <ThemeToggle />
          </div>

          <NotesRow notes={notes} />
          <ChatSearch value={search} onChange={setSearch} />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Groups</h2>
            <div className={styles.groupList}>
              {groups.map((group) => (
                <div key={group.id} className={styles.groupItem}>
                  <div className={styles.groupAvatar}>#</div>
                  <div className={styles.groupInfo}>
                    <span className={styles.groupName}>{group.name}</span>
                    <span className={styles.groupPreview}>
                      {group.lastMessage}
                    </span>
                  </div>
                  {group.unread > 0 && (
                    <span className={styles.groupBadge}>{group.unread}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.section} ${styles.messagesSection}`}>
            <h2 className={styles.sectionTitle}>Messages</h2>
            <ChatList chats={filteredChats} />
          </section>

          <div className={styles.sidebarFooter}>
            <div className={styles.userRow}>
              <div className={styles.userAvatar}>
                {(user?.name || 'U').charAt(0)}
              </div>
              <div className={styles.userMeta}>
                <span className={styles.userName}>
                  {user?.name || 'Guest'}
                </span>
                <span className={styles.userEmail}>
                  {user?.email || ''}
                </span>
              </div>
            </div>
            <div className={styles.footerActions}>
              <Link href="/settings" className={styles.footerLink}>
                Settings
              </Link>
              <button
                type="button"
                className={styles.signOut}
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </aside>

        <main
          className={`${styles.chatArea} ${!isConversation ? styles.chatAreaEmpty : ''}`}
        >
          {isConversation && (
            <Link href="/chat" className={styles.backBtn}>
              ← Inbox
            </Link>
          )}
          {children}
        </main>

        <aside className={styles.rightPanel}>
          <p className={styles.rightPanelText}>
            Member list & group info — coming soon
          </p>
        </aside>
      </div>
    </ChatGuard>
  );
}

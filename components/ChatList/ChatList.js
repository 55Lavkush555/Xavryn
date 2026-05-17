'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { formatChatTime } from '@/lib/utils';

import styles from './ChatList.module.css';

export default function ChatList({ chats = [] }) {
  const params = useParams();
  const activeChatId = params?.conversationId;

  if (chats.length === 0) {
    return (
      <p className={styles.empty}>No conversations match your search.</p>
    );
  }

  return (
    <div className={styles.chatList}>
      {chats.map((chat) => {
        const isActive = String(activeChatId) === String(chat.id);
        const hasUnread = chat.unread > 0;

        return (
          <Link
            key={chat.id}
            href={`/chat/${chat.id}`}
            className={`${styles.chatItem} ${isActive ? styles.active : ''}`}
          >
            <div
              className={`${styles.avatar} ${chat.online ? styles.avatarOnline : ''}`}
            >
              {chat.name.charAt(0)}
            </div>

            <div className={styles.chatInfo}>
              <div className={styles.topRow}>
                <h3
                  className={`${styles.chatName} ${hasUnread ? styles.bold : ''}`}
                >
                  {chat.name}
                </h3>
                <span className={styles.time}>
                  {formatChatTime(chat.lastMessageAt)}
                </span>
              </div>

              <div className={styles.bottomRow}>
                <p
                  className={`${styles.lastMessage} ${hasUnread ? styles.bold : ''}`}
                >
                  {chat.lastMessage}
                </p>
                {hasUnread && (
                  <span className={styles.badge}>{chat.unread}</span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

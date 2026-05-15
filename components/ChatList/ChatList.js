'use client';

import Link from 'next/link';

import { useParams } from 'next/navigation';

import styles from './ChatList.module.css';

export default function ChatList({
  chats = [],
}) {
  const params = useParams();

  const activeChatId =
    params?.conversationId;

  return (
    <div className={styles.chatList}>
      {chats.map((chat) => {
        const isActive =
          String(activeChatId) ===
          String(chat.id);

        return (
          <Link
            key={chat.id}
            href={`/chat/${chat.id}`}
            className={`${styles.chatItem} ${
              isActive
                ? styles.active
                : ''
            }`}
          >
            {/* AVATAR */}
            <div className={styles.avatar}>
              {chat.name.charAt(0)}
            </div>

            {/* INFO */}
            <div className={styles.chatInfo}>
              <div className={styles.topRow}>
                <h3 className={styles.name}>
                  {chat.name}
                </h3>

                {chat.online && (
                  <span
                    className={styles.onlineDot}
                  ></span>
                )}
              </div>

              <p className={styles.lastMessage}>
                {chat.lastMessage}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
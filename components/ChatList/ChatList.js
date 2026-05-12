'use client';

import Link from 'next/link';

import styles from './ChatList.module.css';

import Avatar from '@/components/Avatar/Avatar';

export default function ChatList({
  chats,
  activeChatId,
}) {
  const getLastMessage = (chat) => {
    if (typeof window === 'undefined') {
      return chat.messages?.[
        chat.messages.length - 1
      ]?.text;
    }

    const savedMessages =
      localStorage.getItem(
        `chat-${chat.id}`
      );

    if (savedMessages) {
      const parsed =
        JSON.parse(savedMessages);

      return (
        parsed[parsed.length - 1]
          ?.text || 'No messages yet'
      );
    }

    return (
      chat.messages?.[
        chat.messages.length - 1
      ]?.text || 'No messages yet'
    );
  };

  return (
    <div className={styles.chatList}>
      {chats.map((chat) => (
        <Link
          key={chat.id}
          href={`/chat/${chat.id}`}
          className={`${styles.chatItem} ${
            activeChatId === chat.id
              ? styles.active
              : ''
          }`}
        >
          <div className={styles.avatarWrapper}>
            <Avatar name={chat.name} />

            {chat.online && (
              <span
                className={
                  styles.onlineDot
                }
              ></span>
            )}
          </div>

          <div className={styles.chatInfo}>
            <div className={styles.topRow}>
              <h3>{chat.name}</h3>
            </div>

            <p className={styles.lastMessage}>
              {getLastMessage(chat)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
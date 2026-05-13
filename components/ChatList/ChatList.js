'use client';

import Link from 'next/link';

import {
  useEffect,
  useState,
} from 'react';

import styles from './ChatList.module.css';

import Avatar from '@/components/Avatar/Avatar';

export default function ChatList({
  chats,
  activeChatId,
}) {
  const [latestMessages, setLatestMessages] =
    useState({});

  useEffect(() => {
    const updatedMessages = {};

    chats.forEach((chat) => {
      const savedMessages =
        localStorage.getItem(
          `chat-${chat.id}`
        );

      if (savedMessages) {
        const parsed =
          JSON.parse(savedMessages);

        updatedMessages[chat.id] =
          parsed[parsed.length - 1]
            ?.text;
      } else {
        updatedMessages[chat.id] =
          chat.messages?.[
            chat.messages.length - 1
          ]?.text;
      }
    });

    setLatestMessages(updatedMessages);
  }, [chats]);

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
                  styles.onlineIndicator
                }
              ></span>
            )}
          </div>

          <div className={styles.chatInfo}>
            <div className={styles.topRow}>
              <h4>{chat.name}</h4>
            </div>

            <div className={styles.bottomRow}>
              <p>
                {latestMessages[chat.id] ||
                  'No messages yet'}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
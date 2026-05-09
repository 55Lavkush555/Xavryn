'use client';

import styles from './ChatList.module.css';
import Avatar from '@/components/Avatar/Avatar';

const chats = [
  {
    id: 1,
    name: 'Lavkush',
    message: 'Yo, did you finish the UI?',
    time: '2m',
    online: true,
  },
  {
    id: 2,
    name: 'Sarah',
    message: 'The new design looks amazing',
    time: '10m',
    online: false,
  },
  {
    id: 3,
    name: 'Alex',
    message: 'Let’s deploy tonight.',
    time: '1h',
    online: true,
  },
];

export default function ChatList() {
  return (
    <div className={styles.chatList}>
      {chats.map((chat) => (
        <div key={chat.id} className={styles.chatItem}>
          <div className={styles.avatarWrapper}>
            <Avatar name={chat.name} />

            {chat.online && (
              <span className={styles.onlineIndicator}></span>
            )}
          </div>

          <div className={styles.chatInfo}>
            <div className={styles.topRow}>
              <h4>{chat.name}</h4>
              <span>{chat.time}</span>
            </div>

            <p>{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
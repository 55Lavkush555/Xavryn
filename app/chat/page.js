import styles from './chat.module.css';

import ChatList from '@/components/ChatList/ChatList';
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ChatInput from '@/components/ChatInput/ChatInput';
import Avatar from '@/components/Avatar/Avatar';

const messages = [
  {
    id: 1,
    message: 'Yo Zubi, this looks WAY better now.',
    time: '10:30 PM',
    isOwnMessage: false,
  },
  {
    id: 2,
    message: 'Finally starting to feel like a real app.',
    time: '10:31 PM',
    isOwnMessage: true,
  },
  {
    id: 3,
    message: 'Tomorrow we add sockets + animations.',
    time: '10:32 PM',
    isOwnMessage: false,
  },
];

export default function ChatPage() {
  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoX}>X</span>
          <span className={styles.logoText}>avryn</span>
        </div>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search conversations"
          />
        </div>

        <ChatList />
      </aside>

      {/* CHAT AREA */}
      <main className={styles.chatArea}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <Avatar name="Lavkush" />

            <div>
              <h3>Lavkush</h3>
              <span>Online</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.message}
              time={msg.time}
              isOwnMessage={msg.isOwnMessage}
            />
          ))}
        </div>

        {/* Input */}
        <ChatInput />
      </main>
    </div>
  );
}
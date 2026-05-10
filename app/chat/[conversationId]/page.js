import styles from './conversation.module.css';

import Avatar from '@/components/Avatar/Avatar';
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ChatInput from '@/components/ChatInput/ChatInput';

const messages = [
  {
    id: 1,
    sender: 'Lavkush',
    message: 'Yo Zubi, the UI is looking clean now 👀',
    time: '10:30 PM',
    isOwnMessage: false,
  },
  {
    id: 2,
    sender: 'You',
    message: 'Still needs polishing but it’s improving.',
    time: '10:31 PM',
    isOwnMessage: true,
  },
  {
    id: 3,
    sender: 'Lavkush',
    message: 'Tomorrow let’s finish real-time sockets.',
    time: '10:32 PM',
    isOwnMessage: false,
  },
];

export default function ConversationPage() {
  return (
    <div className={styles.container}>
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
            sender={msg.sender}
            time={msg.time}
            isOwnMessage={msg.isOwnMessage}
          />
        ))}
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
}
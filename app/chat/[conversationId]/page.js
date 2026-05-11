import styles from './conversation.module.css';

import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ChatInput from '@/components/ChatInput/ChatInput';
import Avatar from '@/components/Avatar/Avatar';

import { chats } from '@/lib/chat';

export default async function ConversationPage({
  params,
}) {
  const { conversationId } = await params;

  const chat = chats.find(
    (c) => c.id === conversationId
  );

  if (!chat) {
    return (
      <div className={styles.notFound}>
        Conversation not found
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <Avatar name={chat.name} />

          <div>
            <h3>{chat.name}</h3>

            <span>
              {chat.online
                ? 'Online'
                : 'Offline'}
            </span>
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className={styles.messages}>
        {chat.messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            time={msg.time}
            isOwnMessage={
              msg.sender === 'me'
            }
          />
        ))}
      </div>

      {/* INPUT */}
      <ChatInput />
    </div>
  );
}
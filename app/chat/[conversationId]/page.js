'use client';

import { use, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './conversation.module.css';

import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ChatInput from '@/components/ChatInput/ChatInput';
import Avatar from '@/components/Avatar/Avatar';
import { getChatById } from '@/lib/chat';
import {
  loadStoredMessages,
  saveStoredMessages,
} from '@/lib/messages';
import {
  formatMessageTime,
  groupMessagesByDate,
} from '@/lib/utils';

function ConversationView({ conversationId, chat }) {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState(() =>
    loadStoredMessages(conversationId, chat.messages)
  );
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showTyping]);

  useEffect(() => {
    if (messages.length === 0) return;
    saveStoredMessages(conversationId, messages);
  }, [messages, conversationId]);

  const messageGroups = groupMessagesByDate(messages);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'me',
      createdAt: new Date().toISOString(),
      status: 'sent',
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === newMessage.id ? { ...m, status: 'delivered' } : m
        )
      );
    }, 400);

    setShowTyping(true);
    setTimeout(() => setShowTyping(false), 2200);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <Avatar name={chat.name} online={chat.online} />
          <div>
            <h3>{chat.name}</h3>
            <span className={chat.online ? styles.online : styles.offline}>
              {chat.online ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Voice call"
            disabled
            title="Coming soon"
          >
            📞
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Video call"
            disabled
            title="Coming soon"
          >
            📹
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Search in chat"
          >
            🔍
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="More options"
          >
            ⋮
          </button>
        </div>
      </header>

      <div className={styles.messages}>
        <AnimatePresence initial={false}>
          {messageGroups.map((group) => (
            <div key={group.label} className={styles.dateGroup}>
              <span className={styles.dateLabel}>{group.label}</span>
              {group.messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChatMessage
                    message={msg.text}
                    time={formatMessageTime(msg.createdAt)}
                    isOwnMessage={msg.sender === 'me'}
                    status={msg.status}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </AnimatePresence>

        {showTyping && (
          <p className={styles.typing}>{chat.name} is typing…</p>
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default function ConversationPage({ params }) {
  const { conversationId } = use(params);
  const chat = getChatById(conversationId);

  if (!chat) {
    return (
      <div className={styles.notFound}>Conversation not found</div>
    );
  }

  return (
    <ConversationView
      key={conversationId}
      conversationId={conversationId}
      chat={chat}
    />
  );
}

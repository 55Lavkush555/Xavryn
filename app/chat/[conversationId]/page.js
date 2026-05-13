'use client';

import {
  use,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './conversation.module.css';

import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ChatInput from '@/components/ChatInput/ChatInput';
import Avatar from '@/components/Avatar/Avatar';

import { chats } from '@/lib/chat';

export default function ConversationPage({
  params,
}) {
  const resolvedParams = use(params);

  const conversationId =
    resolvedParams.conversationId;

  const chat = chats.find(
    (c) => c.id === conversationId
  );

  const messagesEndRef =
    useRef(null);

  const getInitialMessages = () => {
    if (typeof window === 'undefined') {
      return [];
    }

    const savedMessages =
      localStorage.getItem(
        `chat-${conversationId}`
      );

    if (savedMessages) {
      return JSON.parse(savedMessages);
    }

    return chat?.messages || [];
  };

  const [messages, setMessages] =
    useState(getInitialMessages);

  /* AUTO SCROLL */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: 'smooth',
      }
    );
  }, [messages]);

  /* SAVE MESSAGES */
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        `chat-${conversationId}`,
        JSON.stringify(messages)
      );
    }
  }, [messages, conversationId]);

  if (!chat) {
    return (
      <div className={styles.notFound}>
        Conversation not found
      </div>
    );
  }

  const handleSendMessage = (
    messageText
  ) => {
    const newMessage = {
      id: Date.now(),

      text: messageText,

      sender: 'me',

      time: new Date().toLocaleTimeString(
        [],
        {
          hour: '2-digit',
          minute: '2-digit',
        }
      ),
    };

    setMessages((prev) => [
      ...prev,
      newMessage,
    ]);
  };

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
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            time={msg.time}
            isOwnMessage={
              msg.sender === 'me'
            }
          />
        ))}

        <div ref={messagesEndRef}></div>
      </div>

      {/* INPUT */}
      <ChatInput
        onSendMessage={
          handleSendMessage
        }
      />
    </div>
  );
}
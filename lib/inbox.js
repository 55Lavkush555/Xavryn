import { chats as baseChats } from '@/lib/chat';
import { loadStoredMessages } from '@/lib/messages';

function getLastMessagePreview(messages, fallback) {
  if (!messages?.length) {
    return {
      lastMessage: fallback.lastMessage,
      lastMessageAt: fallback.lastMessageAt,
    };
  }

  const last = messages[messages.length - 1];
  const prefix = last.sender === 'me' ? 'You: ' : '';

  return {
    lastMessage: `${prefix}${last.text}`,
    lastMessageAt: last.createdAt || fallback.lastMessageAt,
  };
}

export function buildInboxChats() {
  return baseChats.map((chat) => {
    const messages = loadStoredMessages(chat.id, chat.messages);
    const preview = getLastMessagePreview(messages, chat);

    return {
      ...chat,
      lastMessage: preview.lastMessage,
      lastMessageAt: preview.lastMessageAt,
    };
  });
}

export function getInboxSnapshot() {
  return JSON.stringify(buildInboxChats());
}

export function getServerInboxSnapshot() {
  return JSON.stringify(
    baseChats.map(({ messages, ...chat }) => chat)
  );
}

export function parseInboxSnapshot(snapshot) {
  try {
    return JSON.parse(snapshot);
  } catch {
    return baseChats;
  }
}

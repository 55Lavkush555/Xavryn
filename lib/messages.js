const CHATS_EVENT = 'xavryn:chats-updated';

export function subscribeChats(onStoreChange) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handler = () => onStoreChange();

  window.addEventListener('storage', handler);
  window.addEventListener(CHATS_EVENT, handler);

  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(CHATS_EVENT, handler);
  };
}

export function notifyChatsUpdated() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CHATS_EVENT));
  }
}

export function loadStoredMessages(conversationId, defaultMessages = []) {
  if (typeof window === 'undefined') return defaultMessages;

  const storageKey = `chat-${conversationId}`;
  const saved = localStorage.getItem(storageKey);

  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(storageKey);
    }
  }

  return defaultMessages;
}

export function saveStoredMessages(conversationId, messages) {
  if (typeof window === 'undefined') return;

  localStorage.setItem(
    `chat-${conversationId}`,
    JSON.stringify(messages)
  );
  notifyChatsUpdated();
}

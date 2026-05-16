export function formatChatTime(isoString) {
  if (!isoString) return '';

  const date = new Date(isoString);
  const now = new Date();

  const isToday =
    date.toDateString() === now.toDateString();

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    date.toDateString() === yesterday.toDateString();

  const time = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (isToday) return time;
  if (isYesterday) return 'Yesterday';
  return date.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
  });
}

export function formatMessageTime(isoString) {
  if (!isoString) return '';
  return new Date(isoString).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatDateLabel(isoString) {
  if (!isoString) return 'Today';

  const date = new Date(isoString);
  const now = new Date();

  if (date.toDateString() === now.toDateString()) return 'Today';

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

  return date.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export function groupMessagesByDate(messages) {
  const groups = [];

  messages.forEach((message) => {
    const createdAt =
      message.createdAt || new Date().toISOString();
    const label = formatDateLabel(createdAt);
    const last = groups[groups.length - 1];

    const normalized = { ...message, createdAt };

    if (last && last.label === label) {
      last.messages.push(normalized);
    } else {
      groups.push({ label, messages: [normalized] });
    }
  });

  return groups;
}

export function filterChats(chats, query) {
  const q = query.trim().toLowerCase();
  if (!q) return chats;

  return chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(q) ||
      chat.lastMessage.toLowerCase().includes(q)
  );
}

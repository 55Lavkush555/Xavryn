const today = new Date();
const hoursAgo = (h) =>
  new Date(today.getTime() - h * 60 * 60 * 1000).toISOString();
const daysAgo = (d, h = 12) =>
  new Date(
    today.getTime() - d * 24 * 60 * 60 * 1000 - h * 60 * 60 * 1000
  ).toISOString();

export const notes = [
  {
    id: 'me',
    name: 'You',
    text: 'Building Xavryn tonight ⚡',
    isOwn: true,
    online: true,
  },
  {
    id: '1',
    name: 'Lavkush',
    text: '⚡ Grinding on UI',
    online: true,
  },
  {
    id: '2',
    name: 'Sarah',
    text: '☕ Late night coding',
    online: false,
  },
  {
    id: '3',
    name: 'Alex',
    text: '🚀 Deployment soon',
    online: true,
  },
];

export const groups = [
  {
    id: 'g1',
    name: 'Xavryn Builders',
    lastMessage: 'Ship the beta this week 🚀',
    lastMessageAt: hoursAgo(2),
    unread: 2,
    members: 5,
  },
  {
    id: 'g2',
    name: 'Design Squad',
    lastMessage: 'Purple glow approved ✨',
    lastMessageAt: daysAgo(1),
    unread: 0,
    members: 8,
  },
];

export const chats = [
  {
    id: '1',
    name: 'Lavkush',
    online: true,
    lastMessage: 'Tomorrow we should add sockets.',
    lastMessageAt: hoursAgo(1),
    unread: 2,
    messages: [
      {
        id: 1,
        text: 'Yo Zubi, this looks WAY cleaner now.',
        createdAt: hoursAgo(3),
        sender: 'other',
        status: 'read',
      },
      {
        id: 2,
        text: 'Finally starting to feel like a real app.',
        createdAt: hoursAgo(2.5),
        sender: 'me',
        status: 'read',
      },
      {
        id: 3,
        text: 'Tomorrow we should add sockets.',
        createdAt: hoursAgo(1),
        sender: 'other',
        status: 'delivered',
      },
    ],
  },
  {
    id: '2',
    name: 'Sarah',
    online: false,
    lastMessage: 'Especially the purple-blue glow.',
    lastMessageAt: hoursAgo(5),
    unread: 0,
    messages: [
      {
        id: 1,
        text: 'The new Xavryn branding looks premium.',
        createdAt: hoursAgo(6),
        sender: 'other',
        status: 'read',
      },
      {
        id: 2,
        text: 'Especially the purple-blue glow.',
        createdAt: hoursAgo(5),
        sender: 'me',
        status: 'read',
      },
    ],
  },
  {
    id: '3',
    name: 'Alex',
    online: true,
    lastMessage: 'Agreed. UI is getting strong now.',
    lastMessageAt: daysAgo(1, 2),
    unread: 1,
    messages: [
      {
        id: 1,
        text: 'We should launch beta this month.',
        createdAt: daysAgo(1, 4),
        sender: 'other',
        status: 'read',
      },
      {
        id: 2,
        text: 'Agreed. UI is getting strong now.',
        createdAt: daysAgo(1, 2),
        sender: 'me',
        status: 'delivered',
      },
    ],
  },
];

export function getChatById(id) {
  return chats.find((c) => c.id === String(id));
}

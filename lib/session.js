const SESSION_EVENT = 'xavryn:session';

export function subscribeSession(onStoreChange) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handler = () => onStoreChange();

  window.addEventListener('storage', handler);
  window.addEventListener(SESSION_EVENT, handler);

  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(SESSION_EVENT, handler);
  };
}

function notifySessionChange() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(SESSION_EVENT));
  }
}

export function getTokenSnapshot() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function getUserSnapshot() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('user');
}

export function parseUser(snapshot) {
  if (!snapshot) return null;

  try {
    return JSON.parse(snapshot);
  } catch {
    return null;
  }
}

export function getToken() {
  return getTokenSnapshot();
}

export function getUser() {
  return parseUser(getUserSnapshot());
}

export function isAuthenticated() {
  return Boolean(getTokenSnapshot());
}

export function logout() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  notifySessionChange();
}

export function saveSession(user, token) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  notifySessionChange();
}

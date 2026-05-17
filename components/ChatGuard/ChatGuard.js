'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';

import {
  getTokenSnapshot,
  subscribeSession,
} from '@/lib/session';

export default function ChatGuard({ children }) {
  const router = useRouter();
  const token = useSyncExternalStore(
    subscribeSession,
    getTokenSnapshot,
    () => null
  );
  const authed = Boolean(token);

  useEffect(() => {
    if (!authed) {
      router.replace('/auth/login');
    }
  }, [authed, router]);

  if (!authed) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--muted)',
          fontSize: '14px',
        }}
      >
        Loading…
      </div>
    );
  }

  return children;
}

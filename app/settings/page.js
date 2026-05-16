'use client';

import { useEffect, useMemo, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Logo from '@/components/Logo/Logo';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import {
  getTokenSnapshot,
  getUserSnapshot,
  logout,
  parseUser,
  subscribeSession,
} from '@/lib/session';

import styles from './settings.module.css';

export default function SettingsPage() {
  const router = useRouter();
  const token = useSyncExternalStore(
    subscribeSession,
    getTokenSnapshot,
    () => null
  );
  const userSnapshot = useSyncExternalStore(
    subscribeSession,
    getUserSnapshot,
    () => null
  );
  const user = useMemo(
    () => parseUser(userSnapshot),
    [userSnapshot]
  );

  useEffect(() => {
    if (!token) {
      router.replace('/auth/login');
    }
  }, [token, router]);

  const handleSignOut = () => {
    logout();
    router.push('/auth/login');
  };

  if (!token) {
    return null;
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Logo size="small" href="/chat" />
        <Link href="/chat" className={styles.back}>
          ← Back to chat
        </Link>
      </header>

      <main className={styles.card}>
        <h1>Settings</h1>

        {user && (
          <section className={styles.section}>
            <h2>Account</h2>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.email}>{user.email}</p>
            {user.username && (
              <p className={styles.email}>@{user.username}</p>
            )}
          </section>
        )}

        <section className={styles.section}>
          <h2>Appearance</h2>
          <div className={styles.row}>
            <span>Theme</span>
            <ThemeToggle />
          </div>
        </section>

        <button type="button" className={styles.signOut} onClick={handleSignOut}>
          Sign out
        </button>
      </main>
    </div>
  );
}

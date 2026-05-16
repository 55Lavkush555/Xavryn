'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

import styles from './ThemeToggle.module.css';

function subscribe() {
  return () => {};
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <span className={styles.btn} aria-hidden="true" />;
  }

  const isDark = theme !== 'light';

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}

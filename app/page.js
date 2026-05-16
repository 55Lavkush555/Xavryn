import Link from 'next/link';

import Logo from '@/components/Logo/Logo';

import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        <Logo size="medium" href="/" />
        <nav className={styles.nav}>
          <Link href="/auth/login" className={styles.navLink}>
            Sign in
          </Link>
          <Link href="/auth/register" className={styles.cta}>
            Get started
          </Link>
        </nav>
      </header>

      <main className={styles.hero}>
        <p className={styles.badge}>Real-time messaging · 2026 ready</p>
        <h1>
          Chat that feels
          <span className={styles.gradient}> modern</span>
        </h1>
        <p className={styles.subtitle}>
          Xavryn brings Instagram-style inbox energy and WhatsApp-grade
          conversations into one dark, purple-glow experience.
        </p>

        <div className={styles.actions}>
          <Link href="/auth/register" className={styles.primaryBtn}>
            Get started free
          </Link>
          <Link href="/auth/login" className={styles.secondaryBtn}>
            Sign in
          </Link>
        </div>

        <ul className={styles.features}>
          <li>End-to-end polished UI</li>
          <li>Groups & DMs ready</li>
          <li>Built for mobile & desktop</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <Logo size="small" />
        <p>© {new Date().getFullYear()} Xavryn</p>
      </footer>
    </div>
  );
}

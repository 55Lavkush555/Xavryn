'use client';

import Link from 'next/link';

import styles from './Logo.module.css';

export default function Logo({ size = 'large', href }) {
  const content = (
    <div className={`${styles.logo} ${styles[size]}`}>
      <span className={styles.logoX} aria-hidden="true">
        X
      </span>
      <span className={styles.logoText}>avryn</span>
      <span className={styles.logoGlow} aria-hidden="true" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={styles.logoLink}>
        {content}
      </Link>
    );
  }

  return content;
}

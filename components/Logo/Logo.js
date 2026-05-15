'use client';

import styles from './Logo.module.css';

export default function Logo({
  size = 'large',
}) {
  return (
    <div
      className={`${styles.logo} ${styles[size]}`}
    >
      <span className={styles.logoX}>
        X
      </span>

      <span className={styles.logoText}>
        avryn
      </span>
    </div>
  );
}
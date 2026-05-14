'use client';

import Image from 'next/image';

import styles from './Logo.module.css';

export default function Logo({
  size = 'large',
}) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      {/* REAL X LOGO */}
      <Image
        src="/x-logo.png"
        alt="Xavryn Logo"
        width={44}
        height={44}
        className={styles.logoImage}
        priority
      />

      {/* avryn */}
      <span className={styles.logoText}>
        avryn
      </span>
    </div>
  );
}
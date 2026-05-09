import styles from './AuthLayout.module.css';
import Link from 'next/link';

export default function AuthLayout({
  children,
  title,
  subtitle,
  showLogo = true
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {showLogo && (
          <Link href="/" className={styles.logo}>
            <span className={styles.logoX}>X</span>
            <span className={styles.logoText}>avryn</span>
          </Link>
        )}

        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>

          {subtitle && (
            <p className={styles.subtitle}>
              {subtitle}
            </p>
          )}
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
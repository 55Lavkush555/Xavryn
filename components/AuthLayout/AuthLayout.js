import styles from './AuthLayout.module.css';
import Logo from '@/components/Logo/Logo';

export default function AuthLayout({
  children,
  title,
  subtitle,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        {/* LOGO */}
        <div className={styles.logoWrapper}>
          <Logo size="large" />
        </div>

        {/* HEADER */}
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
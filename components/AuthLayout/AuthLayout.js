import styles from './AuthLayout.module.css';
import Logo from '@/components/Logo/Logo';

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoWrapper}>
          <Logo size="large" href="/" />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

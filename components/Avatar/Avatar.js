import styles from './Avatar.module.css';

export default function Avatar({ name, online = false, size = 'md' }) {
  return (
    <div
      className={`${styles.avatar} ${styles[size]} ${online ? styles.online : ''}`}
    >
      {name?.charAt(0).toUpperCase()}
    </div>
  );
}

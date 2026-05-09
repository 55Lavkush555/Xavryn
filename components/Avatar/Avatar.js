import styles from './Avatar.module.css';

export default function Avatar({ name }) {
  return (
    <div className={styles.avatar}>
      {name?.charAt(0).toUpperCase()}
    </div>
  );
}
import styles from './Input.module.css';

export default function Input({
  label,
  error,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false,
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
      />

      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
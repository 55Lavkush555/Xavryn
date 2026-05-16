'use client';

import styles from './NotesRow.module.css';

export default function NotesRow({ notes = [] }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
        {notes.map((note) => (
          <div
            key={note.id}
            className={`${styles.note} ${note.isOwn ? styles.own : ''}`}
          >
            <div
              className={`${styles.avatar} ${note.online ? styles.onlineRing : ''}`}
            >
              {note.isOwn ? 'You' : note.name.charAt(0)}
            </div>
            <span className={styles.label}>
              {note.isOwn ? 'Your note' : note.name}
            </span>
            <p className={styles.text}>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

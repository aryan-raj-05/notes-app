import styles from './Note.module.css'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li className={styles.note}>
      {note.content}
      <button className={styles.btn} onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note
import styles from './Footer.module.css'

const Footer = () => {
  // const footerStyle = {
  //   color: 'green',
  //   fontStyle: 'italic'
  // }

  return (
    <div className={styles.footer}>
      <br />
      <p>
          Note app, Department of Computer Science, University of Helsinki 2025
      </p>
    </div>
  )
}

export default Footer
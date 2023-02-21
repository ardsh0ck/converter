import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {new Date().getFullYear()} All rights reserved
    </footer>
  )
}

export default Footer

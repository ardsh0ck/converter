import styles from './Header.module.scss'
import { ReactComponent as ExchangeIcon } from '../../assets/img/icon-exchange.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo}>
        <span>Simple</span>
        <ExchangeIcon className={styles.headerLogoIcon} />
        <span>Converter</span>
      </h1>
    </header>
  )
}

export default Header

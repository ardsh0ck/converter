import { useState, useEffect } from 'react'
import styles from './Converter.module.scss'
import { ReactComponent as ExchangeIcon } from '../../assets/img/icon-exchange.svg'

const Converter = ({ data }) => {
  const [fromAmount, setFromAmount] = useState(100)
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState(1)
  const [toCurrency, setToCurrency] = useState(1)

  const getValue = Number(fromAmount * (fromCurrency / toCurrency)).toFixed(2)

  useEffect(() => {
    setToAmount(getValue)
  }, [getValue])

  return (
    <form className={styles.converter}>
      <fieldset className={styles.converterItem}>
        <label htmlFor="change">
          <span className={styles.converterLabel}>Change</span>
          <input
            className={styles.converterInput}
            type="number"
            id="change"
            value={fromAmount}
            onChange={(event) => setFromAmount(event.target.value)}
          />
        </label>

        <label htmlFor="fromCurrency">
          <span className="block h-0 w-0 overflow-hidden">From currency</span>
          <select
            className={styles.converterSelect}
            onChange={(event) => setFromCurrency(event.target.value)}
            id="fromCurrency"
          >
            <option value={1}>UAH</option>
            {data?.map((item, index) => (
              <option value={item.sale} key={'from' + index}>
                {item.ccy}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <ExchangeIcon className={styles.converterIcon} />

      <fieldset className={styles.converterItem}>
        <label htmlFor="get">
          <span className={styles.converterLabel}>Get</span>
          <input
            className={styles.converterInput}
            type="number"
            id="get"
            value={toAmount}
            onChange={(event) => setToAmount(event.target.value)}
          />
        </label>

        <label htmlFor="toCurrency">
          <span className="block h-0 w-0 overflow-hidden">To currency</span>
          <select
            className={styles.converterSelect}
            onChange={(event) => setToCurrency(event.target.value)}
            id="toCurrency"
          >
            <option value={1}>UAH</option>
            {data?.map((item, index) => (
              <option value={item.sale} key={'to' + index}>
                {item.ccy}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
    </form>
  )
}

export default Converter

import styles from './Table.module.scss'
import TableInput from './TableInput'

const Table = ({ data, totalRequests, isLoading, error }) => {
  const currency = data

  if (error || totalRequests % 5 === 0) {
    return (
      <h1 className={styles.tableError}>
        {error ? `Error:{error}` : 'Something weng wrong'}
      </h1>
    )
  }

  return (
    <div className={styles.table}>
      {isLoading ? (
        <h1 className={styles.tableError}>Loading...</h1>
      ) : (
        <table className={styles.tableTable}>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody>
            {currency.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.ccy}/{item.base_ccy}
                  </td>
                  <td>
                    <TableInput
                      initValue={item.buy}
                      minValue={item.buy * 0.9}
                      maxValue={item.buy * 1.1}
                    />
                  </td>
                  <td>
                    <TableInput
                      initValue={item.sale}
                      minValue={item.sale * 0.9}
                      maxValue={item.sale * 1.1}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table

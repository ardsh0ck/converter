import { useState } from 'react'
import clsx from 'clsx'
import { ReactComponent as PencilIcon } from '../../assets/img/icon-pencil.svg'
import { ReactComponent as CheckIcon } from '../../assets/img/icon-check.svg'
import { ReactComponent as TimesIcon } from '../../assets/img/icon-times.svg'
import styles from './TableInput.module.scss'

const TableInput = ({ initValue, minValue, maxValue }) => {
  const init = Number(initValue).toFixed(2)
  const min = Number(minValue).toFixed(2)
  const max = Number(maxValue).toFixed(2)

  const [inputValue, setInputValue] = useState(init)
  const [inputEdit, setInputEdit] = useState(false)

  const cancelHandler = (event) => {
    setInputEdit(false)
    setInputValue(init)
  }

  return (
    <div className={styles.tableInput}>
      <div className={styles.tableInputInner}>
        <input
          type="number"
          value={inputValue}
          min={min}
          max={max}
          disabled={!inputEdit}
          onChange={(event) => setInputValue(event.target.value)}
          className={clsx(inputEdit && styles.active)}
        />

        <div className={styles.tableInputButtons}>
          {!inputEdit && (
            <button
              type="button"
              className={clsx(
                styles.tableInputButton,
                styles.tableInputButtonPencil
              )}
              onClick={() => setInputEdit(true)}
            >
              <PencilIcon className={styles.tableInputButtonIcon} />
            </button>
          )}

          {inputEdit && (
            <>
              <button
                type="button"
                disabled={inputValue > max || inputValue < min}
                className={clsx(
                  styles.tableInputButton,
                  styles.tableInputButtonCheck
                )}
                onClick={() => setInputEdit(false)}
              >
                <CheckIcon className={styles.tableInputButtonIcon} />
              </button>
              <button
                type="button"
                className={clsx(
                  styles.tableInputButton,
                  styles.tableInputButtonTimes
                )}
                onClick={cancelHandler}
              >
                <TimesIcon className={styles.tableInputButtonIcon} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Validation error */}
      {(inputValue > max || inputValue < min) && (
        <p className={styles.tableInputError}>
          Min: {min}, Max: {max}
        </p>
      )}
    </div>
  )
}

export default TableInput

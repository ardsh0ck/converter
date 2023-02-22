import { useEffect, useState, useRef } from 'react'
import styles from './App.module.scss'
import Header from './components/Header/Header'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'
import Converter from './components/Converter/Converter'

const API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  mode: 'no-cors',
}

function App() {
  const [currency, setCurrency] = useState()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const requestCountRef = useRef(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, requestOptions)
        const currency = await response.json()
        requestCountRef.current = requestCountRef.current + 1
        const requestCounts =
          JSON.parse(localStorage.getItem('requestCounts')) || {}
        requestCounts[new Date().toISOString()] = requestCountRef.current
        localStorage.setItem('requestCounts', JSON.stringify(requestCounts))
        setCurrency(currency)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const requestCounts = JSON.parse(localStorage.getItem('requestCounts')) || {}
  const totalRequests = requestCounts
    ? Object.values(requestCounts).reduce((acc, count) => acc + count, 0)
    : 0

  console.log(requestCounts)

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.appInner}>
        <Table
          data={currency}
          isLoading={isLoading}
          error={error}
          totalRequests={totalRequests}
        />
        <Converter data={currency} />
      </main>

      <Footer />
    </div>
  )
}

export default App

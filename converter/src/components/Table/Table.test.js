import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Table component', () => {
  test('renders loading message when loading prop is true', () => {
    render(<Table isLoading={true} />)
    const loadingMessage = screen.getByText(/loading/i)
    expect(loadingMessage).toBeInTheDocument()
  })

  test('renders error message when error prop is present', () => {
    const errorMessage = String
    render(<Table error={errorMessage} />)
    const errorMessageText = screen.getByText(errorMessage)
    expect(errorMessageText).toBeInTheDocument()
  })

  test('renders table with data when data prop is present', () => {
    const data = [
      { ccy: 'USD', base_ccy: 'UAH', buy: 27.5, sale: 27.8 },
      { ccy: 'EUR', base_ccy: 'UAH', buy: 32.5, sale: 32.8 },
    ]
    render(<Table data={data} />)
    const tableElement = screen.getByRole('table')
    const tableRows = screen.getAllByRole('row')
    expect(tableElement).toBeInTheDocument()
    expect(tableRows.length).toEqual(data.length + 1)
  })
})

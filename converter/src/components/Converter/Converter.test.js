import { render, fireEvent } from '@testing-library/react'
import Converter from './Converter'

describe('Converter', () => {
  const data = [{ ccy: 'USD', sale: 27.5 }]

  it('renders correctly', () => {
    const { getByLabelText } = render(<Converter data={data} />)
    expect(getByLabelText('Change')).toBeInTheDocument()
    expect(getByLabelText('Get')).toBeInTheDocument()
  })

  it('converts the currency correctly', () => {
    const { getByLabelText, getByText } = render(<Converter data={data} />)
    const inputChange = getByLabelText('Change')
    const selectFromCurrency = getByLabelText('From currency')
    const inputGet = getByLabelText('Get')
    const selectToCurrency = getByLabelText('To currency')

    fireEvent.change(inputChange, { target: { value: 100 } })
    fireEvent.change(selectFromCurrency, { target: { value: 1 } })
    fireEvent.change(selectToCurrency, { target: { value: 27.5 } })

    expect(inputGet.value).toBe('3.64')
  })
})

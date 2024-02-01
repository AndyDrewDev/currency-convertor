import { createContext, useState } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState('🇺🇸 USD - United States')
  const [toCurrency, setToCurrency] = useState('🇺🇦 UAH - Ukraine')
  const [firstAmount, setfirstAmount] = useState('')

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setfirstAmount,
  }
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider

import { createContext, useMemo, useState } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState('🇺🇸 USD - United States')
  const [toCurrency, setToCurrency] = useState('🇺🇦 UAH - Ukraine')
  const [firstAmount, setFirstAmount] = useState('')

  const value = useMemo(
    () => ({
      fromCurrency,
      setFromCurrency,
      toCurrency,
      setToCurrency,
      firstAmount,
      setFirstAmount,
    }),
    [
      fromCurrency,
      setFromCurrency,
      toCurrency,
      setToCurrency,
      firstAmount,
      setFirstAmount,
    ]
  )

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider

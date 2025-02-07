import { useState, useContext, useEffect } from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import { InputAmount, SelectCountry, SwitchCurrency } from './components'
import './App.css'
import { CurrencyContext } from './context/CurrencyContext'
import axios from 'axios'

const BoxStyle = {
  background: '#fdfdfd',
  textAlign: 'center',
  color: '#222',
  minHeight: '20rem',
  borderRadius: 2,
  marginTop: '10rem',
  padding: '4rem 2rem',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1);',
  position: 'relative',
}

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext)

  const [resultCurrency, setResultCurrency] = useState(0)

  const codeFromCurrency = fromCurrency.split(' ')[1]
  const codeToCurrency = toCurrency.split(' ')[1]

  useEffect(() => {
    if (firstAmount) {
      axios('https://api.fxratesapi.com/convert', {
        params: {
          api_key: 'fxr_live_b7568c56288541b6dc52edd4d248a10e7278',
          from: codeFromCurrency,
          to: codeToCurrency,
          amount: '',
        },
      })
        .then((response) => {
          console.log(response.data)
          setResultCurrency(response.data.result)
        })
        .catch((error) => console.log(error))
    }
  }, [firstAmount, fromCurrency, toCurrency])

  return (
    <Container maxWidth='md' sx={BoxStyle}>
      <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
        Stay Ahead with Accurate Conversions
      </Typography>

      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label='from'
        />

        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label='to' />
      </Grid>
      {firstAmount ? (
        <Box sx={{ textAlign: 'left', marginTop: '1rem' }}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography
            variant='h5'
            sx={{ marginTop: '5px', fontWeight: 'bold' }}
          >
            {resultCurrency * firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : null}
    </Container>
  )
}

export default App

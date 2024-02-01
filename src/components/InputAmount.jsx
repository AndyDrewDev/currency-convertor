import { Grid, InputAdornment, TextField } from '@mui/material'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const InputAmount = () => {
  const { firstAmount, setfirstAmount } = useContext(CurrencyContext)

  return (
    <Grid item xs={12} md>
      <TextField
      value={firstAmount}
      onChange={e => setfirstAmount(e.target.value)}
        label='Amount'
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }}
      />
    </Grid>
  )
}

export default InputAmount

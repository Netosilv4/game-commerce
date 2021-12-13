import React, { useContext } from 'react'
import { ChartContext } from '../../contexts/UserChart'
import { CartButton } from '../../styles/globalComponents/Buttons'
import { ChartInfoContainer } from './styles'

const ChartInfo = (): JSX.Element => {
  const { total, quantity, clearChart } = useContext(ChartContext)

  return (
    <ChartInfoContainer>
      <h1>
        Games in cart: <span>{quantity}</span>
      </h1>
      <h1>
        Total value: <span>${total}</span>
      </h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        <CartButton style={{ backgroundColor: '#190' }}>Confirm buy</CartButton>
        <CartButton onClick={() => clearChart()}>Clear cart</CartButton>
      </div>
    </ChartInfoContainer>
  )
}

export default ChartInfo

import React, { useContext } from 'react'
import { ChartContext } from '../../contexts/UserChart'
import { UserContext } from '../../contexts/UserContext'
import useBuy from '../../hooks/useBuy'
import { CartButton } from '../../styles/globalComponents/Buttons'
import { FlexDiv } from '../../styles/globalComponents/GeneralComponents'
import { ChartInfoContainer } from './styles'

const ChartInfo = (): JSX.Element => {
  const { total, quantity, clearChart, items } = useContext(ChartContext)
  const { user } = useContext(UserContext)
  const { buyItems, message } = useBuy()

  return (
    <ChartInfoContainer>
      <h1>
        Games in cart: <span>{quantity}</span>
      </h1>
      <h1>
        Total value: <span>${total}</span>
      </h1>
      <h2>{message}</h2>
      <FlexDiv>
        <CartButton
          onClick={() => buyItems(user, items)}
          style={{ backgroundColor: '#190' }}
        >
          Confirm buy
        </CartButton>
        <CartButton onClick={() => clearChart()}>Clear cart</CartButton>
      </FlexDiv>
    </ChartInfoContainer>
  )
}

export default ChartInfo

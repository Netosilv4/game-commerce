import ChartItems from '../chartItems'
import { ChartItemsContainer } from '../chartItems/styles'
import React, { useContext } from 'react'
import ChartInfo from '../chartInfo'
import { ChartContext } from '../../contexts/UserChart'
import { CartContainer } from './styles'
const Cart: React.FC = () => {
  const { items, hidden } = useContext(ChartContext)
  return (
    <CartContainer hidden={hidden}>
      <ChartInfo />
      <ChartItemsContainer>
        {items ? (
          items.map(item => <ChartItems key={item._id} item={item} />)
        ) : (
          <h1>Nothing added</h1>
        )}
      </ChartItemsContainer>
    </CartContainer>
  )
}

export default Cart

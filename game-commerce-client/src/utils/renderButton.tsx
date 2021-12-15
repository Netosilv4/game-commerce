import { GameI } from '../interfacesAndTypes/game'
import React, { useContext } from 'react'
import { ChartContext } from '../contexts/UserChart'
import { HeroButton } from '../components/hero/styles'

export const renderButton = (item: GameI): JSX.Element => {
  const { items, addToChart, removeFromChart } = useContext(ChartContext)
  switch (true) {
    case item.quantity === 0:
      return (
        <HeroButton style={{ backgroundColor: '#ccc' }} disabled>
          Out of stock
        </HeroButton>
      )
    case items.find(cartItem => cartItem._id === item._id) !== undefined:
      return (
        <HeroButton onClick={() => removeFromChart(item)}>
          Already in cart
        </HeroButton>
      )
    default:
      return (
        <HeroButton onClick={() => addToChart(item)}>Add to cart</HeroButton>
      )
  }
}

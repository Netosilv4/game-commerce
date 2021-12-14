import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { ChartContext } from '../../contexts/UserChart'
import { GameI } from '../../interfacesAndTypes/game'
import { CartButton } from '../../styles/globalComponents/Buttons'
import { GameBox, PriceTag, Title } from '../gamesOverview/styles'
import { ItemWrapper } from './styles'

const ChartItems = ({ item }: { item: GameI }): JSX.Element => {
  const router = useRouter()
  const { removeFromChart } = useContext(ChartContext)
  return (
    <ItemWrapper>
      <GameBox
        onClick={() => router.push(`/games/${item._id}`)}
        key={item.name}
        style={{
          backgroundImage: `url(${item.thumb})`,
          width: '100%'
        }}
      >
        <PriceTag>R${item.price}</PriceTag>
        <Title>{item.name}</Title>
      </GameBox>
      <CartButton
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          top: '0',
          right: '0',
          color: '#000'
        }}
        onClick={() => removeFromChart(item)}
      >
        Remover
      </CartButton>
    </ItemWrapper>
  )
}

export default ChartItems

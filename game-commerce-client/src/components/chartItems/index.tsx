import Link from 'next/link'
import React, { useContext } from 'react'
import { ChartContext } from '../../contexts/UserChart'
import { GameI } from '../../interfacesAndTypes/game'
import { CartButton } from '../../styles/globalComponents/Buttons'
import { GameBox, PriceTag, Title } from '../gamesOverview/styles'
import { ItemWrapper } from './styles'

const ChartItems = ({ item }: { item: GameI }): JSX.Element => {
  const { removeFromChart } = useContext(ChartContext)
  return (
    <ItemWrapper>
      <Link href={`/games/${item._id}`}>
        <GameBox
          key={item.name}
          style={{
            backgroundImage: `url(${item.thumb})`,
            width: '100%'
          }}
        >
          <PriceTag>R${item.price}</PriceTag>
          <Title>{item.name}</Title>
        </GameBox>
      </Link>

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

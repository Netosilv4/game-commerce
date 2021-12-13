import { useRouter } from 'next/router'
import React from 'react'
import { GameI } from '../../interfacesAndTypes/game'
import { GameBox, PriceTag, Title } from '../gamesOverview/styles'
import { ItemWrapper } from './styles'

const ChartItems = ({ item }: { item: GameI }): JSX.Element => {
  const router = useRouter()
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
    </ItemWrapper>
  )
}

export default ChartItems

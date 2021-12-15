import { useRouter } from 'next/router'
import React from 'react'
import { GameI } from '../../interfacesAndTypes/game'
import { HomeSection } from '../../styles/globalComponents/HomeSection'
import { GameBox, GameBoxContainer, PriceTag, Title } from './styles'

interface GamesOverviewI {
  games: GameI[]
}
const GamesOverview = ({ games }: GamesOverviewI): JSX.Element => {
  const router = useRouter()
  return (
    <HomeSection>
      <h1>See more</h1>
      <GameBoxContainer>
        {games.map(e => (
          <GameBox
            onClick={() => router.push(`/games/${e._id}`)}
            key={e.name}
            style={{
              backgroundImage: `url(${e.thumb})`
            }}
          >
            <PriceTag>R${e.price}</PriceTag>
            <Title>{e.name}</Title>
          </GameBox>
        ))}
      </GameBoxContainer>
    </HomeSection>
  )
}

export default GamesOverview

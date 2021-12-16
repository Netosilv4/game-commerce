import Link from 'next/link'
import React from 'react'
import { GameI } from '../../interfacesAndTypes/game'
import { HomeSection } from '../../styles/globalComponents/HomeSection'
import { GameBox, GameBoxContainer, PriceTag, Title } from './styles'

interface GamesOverviewI {
  games: GameI[]
}
const GamesOverview = ({ games }: GamesOverviewI): JSX.Element => {
  return (
    <HomeSection>
      <h1>See more</h1>
      <GameBoxContainer>
        {games.map(e => (
          <Link key={e.name} href={`/games/${e._id}`}>
            <GameBox
              style={{
                backgroundImage: `url(${e.thumb})`
              }}
            >
              <PriceTag>R${e.price}</PriceTag>
              <Title>{e.name}</Title>
            </GameBox>
          </Link>
        ))}
      </GameBoxContainer>
    </HomeSection>
  )
}

export default GamesOverview

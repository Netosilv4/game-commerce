import { GameI } from '../../interfacesAndTypes/game'
import React from 'react'
import {
  AditionalInfoContainer,
  DescriptionBox,
  GameAreaContainer,
  List,
  ListItem
} from './styles'
import {
  AditionalInfoBox,
  HeroImage,
  HeroInfo,
  ImageContainer,
  InfoBox
} from '../hero/styles'
import { renderButton } from '../../utils/renderButton'

const GameArea = ({ game }: { game: GameI }): JSX.Element => {
  return (
    <GameAreaContainer>
      <ImageContainer
        style={{ display: 'flex', height: '60vh', width: '100%' }}
        key={game.name}
      >
        <HeroImage src={game.heroImage} alt={game.name} />
        <HeroInfo>
          <h1>{game.name}</h1>
          <h2>${game.price}</h2>
          <h4>{game.publisher}</h4>
          <p>Metacritc: {game.rate}</p>
          <AditionalInfoBox>
            {game.genres.map(e => (
              <InfoBox key={e}>{e}</InfoBox>
            ))}
          </AditionalInfoBox>
          {renderButton(game)}
        </HeroInfo>
      </ImageContainer>
      <AditionalInfoContainer>
        <DescriptionBox>{game.description}</DescriptionBox>
        <DescriptionBox>
          <List>
            <ListItem>Available quantity: {game.quantity}</ListItem>
            <ListItem>Max players: {game.numberOfPlayers}</ListItem>
            <ListItem>
              Release date: {new Date(game.releaseDate).toUTCString()}
            </ListItem>
          </List>
        </DescriptionBox>
      </AditionalInfoContainer>
    </GameAreaContainer>
  )
}

export default GameArea

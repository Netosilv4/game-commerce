import React from 'react'
import { GameI } from '../../interfacesAndTypes/game'
import {
  AditionalInfoBox,
  HeroContainer,
  HeroImage,
  HeroInfo,
  ImageContainer,
  InfoBox
} from './styles'
import { Carousel } from 'react-responsive-carousel'
import { renderButton } from '../../utils/renderButton'
import Link from 'next/link'

interface HeroI {
  featured: GameI[]
}

export const Hero = ({ featured }: HeroI): JSX.Element => {
  if (featured.length > 0) {
    return (
      <HeroContainer>
        <Carousel
          autoPlay
          showArrows
          infiniteLoop
          interval={2000}
          showThumbs={false}
        >
          {featured.map(e => (
            <ImageContainer
              style={{ display: 'flex', height: '60vh' }}
              key={e.name}
            >
              <Link href={`/games/${e._id}`}>
                <HeroImage src={e.heroImage} alt={e.name} />
              </Link>
              <HeroInfo>
                <h1>{e.name}</h1>
                <h2>${e.price}</h2>
                <h4>{e.publisher}</h4>
                <p>Metacritc: {e.rate}</p>
                <AditionalInfoBox>
                  {e.genres.map(e => (
                    <InfoBox key={e}>{e}</InfoBox>
                  ))}
                </AditionalInfoBox>
                {renderButton(e)}
              </HeroInfo>
            </ImageContainer>
          ))}
        </Carousel>
      </HeroContainer>
    )
  }
  return <div>Hero aqui</div>
}

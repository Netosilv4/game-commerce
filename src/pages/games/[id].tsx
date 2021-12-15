import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../components/header'
import { Container } from '../../styles/pages/Home'
import axios from 'axios'
import { GameI } from '../../interfacesAndTypes/game'
import GameArea from '../../components/gameArea'
import Cart from '../../components/chart'

interface GameProps {
  game: GameI
}

const Game: NextPage<GameProps> = ({ game }) => {
  return (
    <Container>
      <Head>
        <title>GameShop</title>
      </Head>
      <Header />
      <Cart />
      <GameArea game={game} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const gamesResponse = await axios.get('http://server:4000/game')

  const paths = gamesResponse.data.map(game => ({
    params: { id: game._id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params
  try {
    const gameResponse = await axios.get(`http://server:4000/game/${id}`)
    return {
      props: {
        game: gameResponse.data
      },
      revalidate: 120
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err)
  }
}

export default Game

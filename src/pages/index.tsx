/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { GameI } from '../interfacesAndTypes/game'
import { Categories } from '../components/categories'
import GamesOverview from '../components/gamesOverview'

interface HomeProps {
  featured: GameI[]
  games: GameI[]
}

const Home: NextPage<HomeProps> = ({ featured, games }) => {
  return (
    <Container>
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />
      <Hero featured={featured} />
      <Categories />
      <GamesOverview games={games} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const featuredResponse = await axios.get(
      'http://localhost:4000/game/featured'
    )
    const gamesResponse = await axios.get('http://localhost:4000/game')
    return {
      props: {
        featured: featuredResponse.data,
        games: gamesResponse.data
      } // will be passed to the page component as props
    }
  } catch (err: any) {
    console.error(err)
  }
}
export default Home

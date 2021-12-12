import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import axios from 'axios'
import { NextPage } from 'next'
import { GameI } from '../interfacesAndTypes/game'
import { Categories } from '../components/categories'

interface HomeProps {
  featured: GameI[]
}

const Home: NextPage<HomeProps> = ({ featured }) => {
  return (
    <Container>
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />
      <Hero featured={featured} />
      <Categories />
    </Container>
  )
}

Home.getInitialProps = async () => {
  try {
    const featuredResponse = await axios.get(
      'http://localhost:4000/game/featured'
    )
    return { featured: featuredResponse.data }
  } catch (err: any) {
    console.error(err)
  }
}

export default Home

import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import UserProvider from '../contexts/UserContext'
import ChartProvider from '../contexts/UserChart'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChartProvider>
        <UserProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </UserProvider>
      </ChartProvider>
    </ThemeProvider>
  )
}

export default MyApp

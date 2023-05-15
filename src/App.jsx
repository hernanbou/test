import { useContext } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ErrorSign } from './styles/error'

import Router from './config/Router'
import 'swiper/css'
import 'swiper/css/pagination'
import { MoviesProvider } from './contexts/MoviesContext'
import { MoviesContext } from '../src/contexts/MoviesContext'

function App() {

  return (
    <BrowserRouter>
      <MoviesProvider>
        <Router />
      </MoviesProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
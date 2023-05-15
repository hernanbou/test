import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

import { MoviesContext } from '../contexts/MoviesContext'

import Header from '../containers/Header'
import Footer from '../containers/Footer'
import { ErrorSign } from '../styles/error'

const Layout = () => {
  const { error } = useContext(MoviesContext)

  return (
    <>
      <Header />
      {error ?
        <ErrorSign>
          <p><span>erro 404: </span>Página não encontrada.</p>
        </ErrorSign> : <Outlet />}
      <Footer />
    </>
  )
}

export default Layout
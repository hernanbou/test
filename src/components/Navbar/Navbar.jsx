import { NavLink as Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useContext } from 'react'

import { Container } from './styled'
import { MoviesContext } from '../../contexts/MoviesContext'

const Navbar = () => {
  const { openMenu, setOpenMenu } = useContext(MoviesContext)

  return (
    <Container open={openMenu}>
      <li>
        <Link to="/" onClick={() => setOpenMenu(false)}>
          início
        </Link>
      </li>
      <li>
        <ScrollLink
          to="catalogue"
          spy={true}
          onClick={() => setOpenMenu(false)}
        >
          catálogo
        </ScrollLink>
      </li>
    </Container>
  )
}

export default Navbar

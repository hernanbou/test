import { useContext } from 'react'

import { Container } from './styled'

import { MoviesContext } from '../../contexts/MoviesContext'


const Burger = ({ openMenuClickEvent }) => {
    const { openMenu } = useContext(MoviesContext);

    return (
        <Container open={openMenu} onClick={openMenuClickEvent}>
            <span />
            <span />
            <span />
        </Container>
    )

}

export default Burger
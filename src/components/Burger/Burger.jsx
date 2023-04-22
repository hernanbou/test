import { Container } from './styled'


const Burger = ({ isOpen, openMenuClickEvent }) => {

    return (
        <Container open={isOpen} onClick={openMenuClickEvent}>
            <span />
            <span />
            <span />
        </Container>
    )

}

export default Burger
import { Container } from './styled'

const PinkButton = ({ text, isCenter, handleClick }) => {
  return (
    <Container center={isCenter} onClick={handleClick}>
      {text}
    </Container>
  )
}

export default PinkButton

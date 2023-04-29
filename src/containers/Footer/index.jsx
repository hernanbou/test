import { Container } from './styled'

const Footer = () => {
    return (
        <Container>
            &copy; {new Date().getFullYear()} Suno Movies. All Rights Reserved.
        </Container>
    );
}

export default Footer;
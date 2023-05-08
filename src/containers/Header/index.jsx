import { useContext } from 'react';

import { Container, Logo, Content } from './styled';

import { MoviesContext } from '../../contexts/MoviesContext';

import Search from '../../components/Search/index'
import Burger from "../../components/Burger/Burger";
import Navbar from "../../components/Navbar/Navbar";




const Header = () => {

    const { openMenu, setOpenMenu, setOpenSearchBar } = useContext(MoviesContext);

    return (
        <Container>
            <Burger openMenuClickEvent={() => { setOpenMenu(!openMenu); setOpenSearchBar(false) }} />
            <Logo><h2>suno<span>movies</span></h2></Logo>
            <Content>
                <Navbar />
                <Search />
            </Content>
        </Container>
    );
}

export default Header;
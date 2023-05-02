import { useState } from "react";

import { Container, Logo, Content } from './styled';

import Search from '../../components/Search/index'
import Burger from "../../components/Burger/Burger";
import Navbar from "../../components/Navbar/Navbar";



const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>
            <Burger isOpen={openMenu} openMenuClickEvent={() => setOpenMenu(!openMenu)} />
            <Logo><h2>suno<span>movies</span></h2></Logo>
            <Content>
                <Navbar isOpen={openMenu} />
                <Search isOpen={openMenu} />
            </Content>
        </Container>
    );
}

export default Header;
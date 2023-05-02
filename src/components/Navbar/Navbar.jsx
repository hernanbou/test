import { NavLink as Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"
import { Container } from './styled';
import { useState } from "react";



const Navbar = ({ isOpen }) => {

    return (
        <Container open={isOpen}>
            <li>
                <Link
                    to='/'
                >
                    início
                </Link>
            </li>
            <li>
                <ScrollLink
                    to='catalogue'
                    spy={true}
                >
                    catálogo
                </ScrollLink>
            </li>
        </Container>
    )
}

export default Navbar
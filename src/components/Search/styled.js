import styled from "styled-components";
import { device } from '../../styles/responsive'

export const Container = styled.div`

`
export const OpenSearch = styled.div`
    cursor: pointer;
`
export const Content = styled.main`
    position: absolute;
    top: 107px;
    left: 0;

    width: 100vw;
    height: ${props => props.open ? "360px" : "0"};

    border-top:  ${props => props.open ? "2px solid var(--background-page)" : "0"} ;

    background: var(--background);
    transition: all 0.5s ease-out;
`;
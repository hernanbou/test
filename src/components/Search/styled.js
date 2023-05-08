import styled from "styled-components";
import { device } from '../../utils/responsive'

export const Container = styled.div`
`
export const OpenSearch = styled.div`
    cursor: pointer;
`

export const Content = styled.main`
    position: absolute;
    top: 107px;
    left: 0;
    padding: 0 446px;

    overflow: hidden;

    width: 100vw;
    height: ${props => props.open ? "360px" : "0"};

    border-top:  ${props => props.open ? "2px solid var(--background-page)" : "0"} ;

    background: var(--background);
    transition: all 0.5s ease-out;
    
    .swiper-scrollbar-drag{background: var(--pink);}
    
    @media ${device.breakpoint}{
        padding: 0 20px;
    }

`;

export const Input = styled.input`
    width: 100%;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 34px;
    padding: 12px;

    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;

    background: none;
    border: none;
    border-bottom: 2px solid var(--pink);

    @media ${device.breakpoint}{
        height: 50px;

        margin-top: 8px;
        margin-bottom: 49px;
        padding: 0 8px;

        font-size: 1.15125rem;
        font-weight: 500;
        line-height: 1.726875rem;
    }
`;
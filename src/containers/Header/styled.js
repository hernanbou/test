import styled from "styled-components";
import { device } from '../../styles/responsive'

export const Container = styled.div`
    height: 107px;
    width: 100%;
    background-color: var(--background);
    padding: 0 446px;
    position:sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 999;
    @media ${device.breakpoint}{
        padding: 0 25px;
    } 
`
export const Logo = styled.div`
    h2{
    text-transform: uppercase;
    line-height: 39px;
    font-size: 1.625rem;
    font-weight: 500;
    span{
        font-weight: 700;
        color:var(--pink)
    }
    }
`
export const Content = styled.div`
    display: flex;
    width: 20vw;
    align-items: center;
    justify-content: space-between;
    @media ${device.breakpoint}{
            width: auto;
        }
`
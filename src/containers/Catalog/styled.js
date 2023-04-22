import styled from 'styled-components';
import DArrow from '../../assets/d_arrow.svg'

export const Container = styled.div`
    position: relative;
    width: 100%;    
`;
export const Header = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0px 446px;
    gap: 13px;
    width: 100%;
    height: 107px;
    background-color: var(--background);
    img{
        position: relative;
        width: 15px;
        height: 15px;
    }
    
    h2{
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.375rem;
        line-height: 33px;
        span{
            font-weight: 600;
        }
    }
`;

export const Content = styled.div`
    padding: 0px 446px;
    gap: 28.85px 31.73px;
    display: grid;
    grid-template-columns: ${props => props.list ? '1fr 2fr' : '1fr'};
`;

export const ControlPanel = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 45px 446px;
`;
export const Display = styled.div`
    display: flex;
    gap: 25px;
`;

export const FilterCategory = styled.select`

    width: 161px;
    height: 44.86px;

    font-weight: 600;
    font-size: 0.90125rem;
    line-height: 1.351875rem;

    position: relative;
    display: flex;
    text-align: center;
    
    gap: 12px;

    border: 2px solid #2E2D31;
    border-radius:4px;
    transition: all 0.2s ease;

    background: linear-gradient(180deg, #212125 0%, #2E2E35 100%),
            linear-gradient(0deg, #212125, #212125),
            linear-gradient(0deg, #2E2D31, #2E2D31);

    &:hover{
        border: 2px solid var(--pink);
    }
    option{
        background:var(--background);
    }
`;

export const Button = styled.button`
    width: 161px;
    height: 44.86px;

    font-weight: 600;
    font-size: 0.90125rem;
    line-height: 1.351875rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 12px;

    border: 2px solid #2E2D31;
    border-radius:4px;
    transition: all 0.2s ease;

    background: linear-gradient(180deg, #212125 0%, #2E2E35 100%),
        linear-gradient(0deg, #212125, #212125),
        linear-gradient(0deg, #2E2D31, #2E2D31);

    img{
        width: 14px;
    }

    &:hover{
        border: 2px solid var(--pink);
    }
`;
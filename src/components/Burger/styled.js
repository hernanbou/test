import styled from 'styled-components';
import { device } from '../../utils/responsive'

export const Container = styled.div`
    display: none;
    z-index: 999;
    
    @media ${device.breakpoint}{
        width: 24px;
        height: 14px;
        left: 22px;
        display: flex;
        gap: 4px;
        flex-flow: column nowrap;
        cursor: pointer;

        span{
            width: 100%;
            height: 2px;
            background-color: var(--text);
            border-radius: 1px;
            transform-origin:3.5px ;
            transition: all 0.3s;

            &:nth-child(1){
                transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"};
            }
            &:nth-child(2){
                transform: ${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${props => props.open ? '0' : '1'}
            }
            &:nth-child(3){
                transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"};
            }
        }
    }
`;
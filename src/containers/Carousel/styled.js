import styled from 'styled-components';
import cine from '../../assets/cine.png'
import { device } from '../../utils/responsive';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 715px;
    background-image: url(${cine});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    border-bottom: 3px solid var(--pink);

    @media ${device.breakpoint}{
        border: none;
        background: none;
    }
`
export const Content = styled.div`
    position: relative;    
    padding: 75px 446px;

    @media ${device.mobile}{
        padding: 46px 70px;

        .swiper-slide {
            position: relative;
            display: flex;
            justify-content: center;
        }
    }
    @media ${device.tablet}{
        padding: 75px 150px;
    }
`
export const Section = styled.section`
    position: relative;
    display: flex;
    align-content: center;
    padding-bottom: 38.87px;

    h2{
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.4375rem;
        line-height: 34.5px;
        padding-left: 13px;
        span{
            font-weight: 600;
        }
    }
    @media ${device.mobile}{
        padding-bottom: 26px;
        h2{
            font-size: 1rem;
        }
        img{
            position: relative;
            top: 9px;
            width: 12.5px;
            height: 12.5px;
        }
    }

`

export const Button = styled.button`
    position: absolute;
    width: 42px;
    height: 42px;
    top: 292.59px;
    overflow: hidden;
    border: none;
    background: none;
    border-radius: 50%; 

    @media ${device.mobile}{
        top: 244px;
    }

    @media ${device.tablet}{
        top: 300px;
    }
`;

export const LButton = styled(Button)`
    left: 381px;
    
    @media ${device.mobile}{
        left: 27px;
    }

    @media ${device.tablet}{
        left: 90px;
    }
`;
export const RButton = styled(Button)`
    right: 381px;

    @media ${device.mobile}{
        right: 27px;
    }

    @media ${device.tablet}{
        right: 90px;
    }
`;

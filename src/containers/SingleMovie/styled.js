import styled from 'styled-components';
import cine from '../../assets/cine.png'
import { device } from '../../utils/responsive'

export const Container = styled.div`
    width: 100%;
`;

export const Main = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 116px 446px;
    background-image: url(${cine});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;

    display: flex;
    gap: 64px;

    @media ${device.breakpoint}{
        height: 100%;        

        flex-direction: column;
        align-items: center;
    };

    @media ${device.mobile}{
        background: none;
        gap: 27px;
        padding: 0px 22px;
    };
    @media ${device.tablet}{
        padding: 0px 120px;
    };
`;

export const Poster = styled.img`
    width: 334px;
    height: 494px;

    @media ${device.breakpoint} {
        padding-top: 47px;
    }
    @media ${device.mobile}{
        width: 318px;
        height: 470px;
    };
    @media ${device.tablet}{
        width: 450px;
        height: 700px;
    };
`;

export const Content = styled.main`
    width: 100%;

    h2{
        font-weight: 700;
        font-size: 3.75rem;
        line-height: 4.25625rem;

        @media ${device.breakpoint}{
            font-size: 1.6875rem;
            line-height: 1.915rem;
        }
    }
`;

export const Info = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
`;

export const Genres = styled.div`
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: var(--pink);

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    span{
        &:after{
            content: ', ';
        }

        &:last-child{
            &:after{
                content: ""
            }
        }
    }

    @media ${device.breakpoint}{
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

export const Rate = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media ${device.breakpoint}{
        gap: 12.91px;
    }

    img{
        width: 26px;
        height: 25px;

        @media ${device.breakpoint}{
            width: 18.43px;
            height: 17.32px;
        }
    }

    p{
        font-weight: 400;
        font-size: 1.653125rem;
        line-height: 2.48rem;

        @media ${device.breakpoint}{
            font-size: 1.166875rem;
            line-height: 1.75rem;
        }
    }
`;

export const Overview = styled.section`
    padding-top: 62px;

    @media ${device.breakpoint}{
        padding-top: 39.92px;
    }

    h3{
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2.109375rem;
        padding-bottom: 20px;

        @media ${device.breakpoint}{
            font-size: 1.25rem;
            line-height: 1.75625rem;
            padding-bottom: 10px;
        }
    }
    p{
        font-weight: 400;
        font-size: 1.375rem;
        line-height: 1.931875rem;
        color: var(--text-desc-single);

        @media ${device.breakpoint}{
            font-size: 1rem;
            line-height: 1.405rem;
            padding-bottom: 10px;
        }
    }  
`;

export const Trailer = styled.section`
    padding: 0px 446px;
    margin-bottom: 401px;

    @media ${device.breakpoint}{
        padding: 0px;
        margin-bottom: 146.99px;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 103px;
    
    display: flex;
    align-items: center;

    margin: 50px 0;

    @media ${device.breakpoint}{
        height: 56.22px;
        margin: 30px 0;
    }

    h3{
        width: 100%;
        padding: 16px 0;

        font-weight: 600;
        font-size: 1.819375rem;
        line-height: 2.555625rem;

        border-bottom: 2px solid var(--pink);

        @media ${device.breakpoint}{
            font-size: 1.25rem;
            line-height: 1.75625rem;
            margin: 0 22px;
        }
    }
`;

export const Frame = styled.iframe`
    width: 100%;
    height: 579px;
    border: none;

    @media ${device.mobile}{
        height: 200px;
    }
`;
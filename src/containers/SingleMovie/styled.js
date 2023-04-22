import styled from 'styled-components';
import cine from '../../assets/cine.png'

export const Container = styled.div`
    width: 100%;
`;

export const Main = styled.div`
    position: relative;
    width: 100%;
    height: 732px;
    padding: 116px 446px;
    background-image: url(${cine});
    background-repeat:no-repeat;
    background-size: cover;

    display: flex;
    gap: 64px;
`;

export const Poster = styled.img`
    width: 334px;
    height: 494px;
`;

export const Content = styled.main`
    width: 100%;
    h2{
        font-weight: 700;
        font-size: 3.75rem;
        line-height: 4.25625rem;
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
`;

export const Rate = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    img{
        width: 26px;
        height: 25px;
    }

    p{
        font-weight: 400;
        font-size: 1.653125rem;
        line-height: 2.48rem;
    }
`;

export const Overview = styled.section`
    padding-top: 62px;

    h3{
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2.109375rem;
        padding-bottom: 20px;
    }
    p{
        font-weight: 400;
        font-size: 1.375rem;
        line-height: 1.931875rem;
        color: var(--text-desc-single);
    }  
`;

export const Trailer = styled.section`
    padding: 0px 446px;
    margin-bottom: 401px;
`;

export const Header = styled.header`
    width: 100%;
    height: 103px;
    display: flex;
    align-items: center;
    margin-bottom: 52.5px;
    border-bottom: 2px solid var(--pink);

    h3{
        font-weight: 600;
        font-size: 1.819375rem;
        line-height: 2.555625rem;
    }
`;

export const Frame = styled.iframe`
    width: 100%;
    height: 579px;
    border: none;
`;
import styled from 'styled-components';
import play from '../../assets/play.svg'

export const Container = styled.div`
    position: relative;
    margin-top: 5px;
    width: ${props => props.display ? '494.25px' : '100%'};
    height: 251px;
    display: flex;
`
export const Poster = styled.section`
    position: relative;
    align-items: center;
    justify-content: center;
    width: 156.74px;
    height: 231.74px;
    border-radius: 4px;
    transition: all 0.3s ease-in;
    
    &:hover{
        background-color: var(--pink);
        img{
            opacity:0.8;
            filter: drop-shadow(0px 0px 5px var(--shadow));
        }
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transition: all 0.3s ease-in;
    }
    &::before{
        position: absolute;
        content:'';
        top: 30%;
        left: 30%;
        z-index: 2;
        display: block;
        opacity: 0;
        width: 5em;
        height: 5rem;
        background: url(${play});
        background-size: cover;
        background-repeat: no-repeat;
        transition: all 0.3s ease-in;        
    }
    &:hover::before{
        opacity: 1;
    }
`
export const Info = styled.main`
    position: relative;
    padding-left: 28.85px;
    width: 65%;
`;
export const Title = styled.h2`
    position: relative;
    width: 100%;
    color:var(--text);
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 33px;
    padding-top: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;
`
export const Genres = styled.div`
    width: 100%;
    font-weight: 300;
    line-height: 24px;
    color:var(--pink);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
export const Rate = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 9.62px;
    padding: 12.5px 0;

    img{
        width:15.99px;
        height:14.84px;
    }
    p{
        font-weight: 400;
        line-height: 24px;
    }
`
export const Overview = styled.div`
    display: block;
    width: 100%;

    p{
        font-size: 0.78125rem;
        font-weight: 300;
        line-height: 1.171875rem;
        color: var(--text-desc);
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
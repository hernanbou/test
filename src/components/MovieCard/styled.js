import styled from 'styled-components';
import play from '../../assets/play.svg'

export const Container = styled.div`
    position: relative;
    margin-top: 5px;
    width: 221px;
    height: 422.13px;
    display: block;
`
export const Poster = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 218.53px;
    height: 328.27px;
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
export const Title = styled.h2`
    width: 221px;
    color:var(--text);
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 33px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 14px;
    cursor: pointer;
`
export const Genres = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    line-height: 24px;
    color:var(--pink);

    span{
        &:after{
            content: ", "
            }
        &:last-child{
            &:after{
                content: ""
                }
        }
    } 
`
export const Rate = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 11.2px;
    padding-top: 2px;

    img{
        width:15.99px;
        height:14.84px;
    }
    p{
        font-weight: 400;
        line-height: 24px;
    }
`
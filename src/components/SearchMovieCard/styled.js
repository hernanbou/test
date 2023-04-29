import styled from 'styled-components';

export const Container = styled.div`
    width: 302px;    
    height: 191px;

    display: flex;
    gap: 22px;

    background: #252529;
    border: 1px solid #313136;
    border-radius: 4px;
`;

export const Poster = styled.div`
    padding-top: 21px;
    padding-left: 22px;

    width: 98px;
    height: 147px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
    
`;

export const Info = styled.main`
    padding-top: 34px;

    h2{
        color:var(--text);

        font-weight: 500;
        font-size: 1.375rem;
        line-height: 2.0625rem;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const Genres = styled.div`
    color:var(--pink);

    font-weight: 300;
    line-height: 1.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

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
        color:var(--text);
        font-weight: 400;
        line-height: 1.5rem;
    }
`;
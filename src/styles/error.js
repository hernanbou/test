import styled from 'styled-components';

export const ErrorSign = styled.div`
    height: 75vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 3rem;
        font-weight: 700;
        span{
            color:var(--pink);
            text-transform:uppercase;
        }
    }
    
`;
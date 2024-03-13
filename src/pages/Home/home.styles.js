import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    height: 100vh;
    
    h1 {
        font-size: 3em;
    }

    p {
        font-size: 25px;
    }

    span {
        text-align: center;
        font-size: 20px;

        a {
            font-weight: bold;
            color: var(--color-950);
            text-decoration: none;
        }
    }
`

export {
    HomeContainer
}
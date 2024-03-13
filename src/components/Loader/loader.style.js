import styled, { keyframes } from 'styled-components';

const keyframes_spin = keyframes`
    from { box- shadow: 20px 0 #000, -20px 0 #0002; background: var(--color-950) }
    to { box- shadow: 20px 0 #0002, -20px 0 #000; background: var(--color-200) }
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`

const LoaderItem = styled.div`
    width: 25px;
    height: 25px;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: ${keyframes_spin} 1s infinite linear alternate;
`

export {
    LoaderContainer,
    LoaderItem
}


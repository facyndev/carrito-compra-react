import styled from 'styled-components';

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px 15px;
    text-align: center;
    border-radius: 10px;
    outline-offset: 2px;
    background: ${(props) => props.variant === 'flat' ? 'var(--color-950)' : 'transparent'};
    border: ${(props) => props.variant === 'outline' ? '1px solid var(--color-950)' : 'none'};
    opacity: ${(props) => props.variant === 'disabled' ? 0.5 : 1};
    color: ${(props) => props.variant === 'outline' ? 'var(--color-950)' : 'var(--color-50)'};
    font-size: 20px;
    cursor: ${(props) => props.variant === 'disabled' ? 'not-allowed' : 'pointer'};
    transition: all .1s ease-in-out;
    width: ${(props) => props.size === 'full' ? '100%' : 'fit-content'};
    min-width: 50px;
    min-height: 10px;

    &:hover {
        color: var(--color-50);
        background: ${(props) => props.variant === 'flat' ? 'var(--color-800)' : 'var(--color-950)'};
        outline: 2px solid var(--color-500);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export {
    ButtonContainer
}
import styled from 'styled-components';

const Nav = styled.nav`
    width: 80%;
    margin: 0 auto;
    padding: 20px 30px;
    margin: 10px auto 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    border: 1px solid var(--color-900);
    border-radius: 100px;
    background-color: var(--color-200);
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    list-style: none;
`;

const NavListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: color .5s ease;

    &:hover {
        a {
            color: var(--color-950);
        }
    }

    a {
        font-weight: bold;
        color: var(--color-900);
        text-decoration: none;
    }
`;

const NavBadge = styled.div`
    font-size: 12px;
    position: absolute;
    top: -50%;
    right: -50%;
    padding: 3px 5px;
    border-radius: 10px;
    background: var(--color-950);
    color: var(--color-50);
`

export {
    Nav,
    NavList,
    NavListItem,
    NavBadge
}
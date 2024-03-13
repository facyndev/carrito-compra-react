import styled from 'styled-components';

const CartContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`

const CartBody = styled.div`
    display: block;
`;

const CartContent = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    max-heigth: 100vh;
    heigth: 100vh;
`;

const CartContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    background: var(--color-50);
    font-size: 25px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const CartDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--color-300);
`

const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-x: auto;
    max-height: calc(100vh - 300px);
    height: calc(100vh - 300px);
    width: 100%;

    .empty-cart {
        color: var(--color-700);
    }
`

const CartListItem = styled.li`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    min-width: 100%;
    gap: 10px;

    .delete-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
        background-color: var(--color-50);
        cursor: pointer;
    }

    .cartlist {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .cartlist-title {
        max-width: 400px;
        font-size: 20;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .cartlist-price {
        font-size: 18px;
        font-weight: 300;
    }


    .cartlist-quantity {
        display: flex;
        align-items: center;
        gap: 8px;

        span {
            text-align: center;
            background: var(--color-50);
            padding: 10px 15px;
            border-radius: 10px;
            min-width: 30px;
            min-height: 10px;
            outline-offset: 2px;
        }
    }


    img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
    }

`;

export {
    CartContainer,
    CartBody,
    CartContent,
    CartContentFooter,
    CartDivider,
    CartList,
    CartListItem
}
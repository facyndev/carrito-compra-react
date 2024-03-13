import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    height: auto;
    align-items: flex-start;
    padding: 10px;
    background-color: var(--color-50);
    border-radius: 10px;
`;

const ItemHeader = styled.div`
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
    }
`

const ItemBody = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 5px;

    .item-tile {
        font-size: 25px;
    }

    .item-price {
        font-weight: 500;
        font-size: 22px;
    }

    .item-description {
        color: var(--color-600);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`

const ItemFooter = styled.div`
    width: 100%;
`;

export {
    ItemContainer,
    ItemHeader,
    ItemBody,
    ItemFooter
}
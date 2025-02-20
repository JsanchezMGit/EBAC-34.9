import styled from "styled-components";

const CartItemContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #333;
    @media (max-width: 520px) {
        flex-direction: column;
    }    
`;
const CartItemImage = styled.img`
    width: 60px;
    text-align:center;
`;

const CartItemName = styled.p`
    font-weight:500;
    min-width: 300px;
    text-align: center;
`;

const CartItemDeleteIcon = styled.i`
    cursor: pointer;
    width: 25px;
    img {
        width: 100%;
        text-align: center;
    }
`;

const CartItemCount = styled.span`
    @media (max-width: 520px) {
        align-self: flex-start;
    }   
`;

const CartItemPrice = styled.span`
    @media (max-width: 520px) {
        align-self: flex-end;
    }   
`;

export { CartItemContainer, CartItemImage, CartItemName, CartItemDeleteIcon, CartItemCount, CartItemPrice }
import styled from "styled-components";

const CartContainer = styled.section`
    background-color: #fff;
    box-shadow: -19px 1px 22px -15px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    height: 100%;
    padding: 20px;
    position: fixed;
    top: 0;
    right: -100%;
    width: 650px;
    transition: all 0.5s;
    overflow-y: scroll;
    overflow-x: hidden;
    &.--shown {
        right: 0;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 520px) {
        box-shadow: none;        
    }
`;

const CartTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    box-sizing: border-box;
    padding: 25px 0;
    text-align: center;
    @media (max-width: 520px) {
        padding: 15px 0;
    }    
`;

const CartClose = styled.span`
  font-weight: 800;
  cursor: pointer;
`;

const CartCheckout = styled.button`
    border-radius: 15px;
    background-color: #1919d2;
    color: #fff;
    border: 0;
    cursor: pointer;
    width: 200px;
    height: 30px;
    font-weight: 600;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const CartTitleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

export { CartContainer, CartTitle, CartClose, CartCheckout, CartTitleContainer }
import styled from "styled-components";

const CartIconContainer = styled.i`
  cursor: pointer;
  display: inline-block;
  width: 35px;
  img {
    width: 100%;
  }
`;

const CartCount = styled.span`
  font-size: 12px;
  background: #1919d2;
  color: #fff;
  padding: 0.5em;
  border-radius: 1em;
  position: relative;
  top: -50px;
  right: -30px;
  @media (max-width: 820px) {
    top: 0;
    left: 5px;
  }  
`;


export {CartIconContainer , CartCount }
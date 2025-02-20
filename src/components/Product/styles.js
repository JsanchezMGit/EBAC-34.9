import styled from "styled-components";

const ProductContainer = styled.article`
    text-align: center;
    margin-bottom: 1em;
`

const ProductTitle = styled.h3`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
`

const ProductImage = styled.img`
    margin-bottom: 15px;
    width: 150px;
    height: 200px;
`
const ProductPrice = styled.p`
    font-size: 15px;
    font-weight: bold;
`

const AddProduct = styled.button`
    border-radius: 15px;
    background-color: #1919d2;
    color: #fff;
    border: 0;
    cursor: pointer;
`

export { ProductContainer, ProductTitle, ProductImage, ProductPrice, AddProduct }
import styled from "styled-components";

export const ProductsContainer = styled.section`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    padding: 25px;
    padding-top: 110px;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }    
`
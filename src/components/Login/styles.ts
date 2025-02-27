import styled from "styled-components"

const LoginContainer = styled.form`
    padding-top: 110px;
    min-height: 400px;
    display: grid;
    align-content: space-evenly;
    justify-items: center;    
`;

const LoginInputContainer = styled.div`
    display: grid;
`;

const LoginInput = styled.input`
    margin-top: .5rem;
    width: 20em;
    height: 2rem;
`;

const LoginButton = styled.button`
    width: 20em;
    height: 2rem; 
    border-radius: 1rem;
    background-color: #1919d2;
    color: #fff;
    border-color: #1919d2;
    cursor: pointer;
`;

const LoginError = styled.p`
    color:#ff0000;
`;

export { LoginContainer, LoginInputContainer, LoginInput, LoginButton, LoginError }
import styled from "styled-components";

const FormContainer = styled.form`
    padding-top: 110px;
    min-height: 400px;
    display: grid;
    align-content: space-evenly;
    justify-items: center;    
`;

const InputContainer = styled.div`
    display: grid;
`;

const Input = styled.input`
    margin-top: .5rem;
    width: 20em;
    height: 2rem;
`;

const Button = styled.button`
    width: 20em;
    height: 2rem; 
    border-radius: 1rem;
    background-color: #1919d2;
    color: #fff;
    border-color: #1919d2;
    cursor: pointer;
`;

const Error = styled.p`
    color:#ff0000;
`;

export { FormContainer, InputContainer, Input, Button, Error }
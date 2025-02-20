import styled from "styled-components"

const AppContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;

const AppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    box-sizing: border-box;
    background-color:rgb(85, 85, 120);
    color: #fff;
`;

const HeaderTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
`;

const AppBody = styled.section`
    display: flex;
    padding: 25px;
    box-sizing: border-box;
    width: 100%;
`;

export { AppContainer, AppHeader, HeaderTitle, AppBody }
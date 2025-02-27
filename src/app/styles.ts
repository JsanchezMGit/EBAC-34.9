import styled from "styled-components"

const AppContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;

const AppHeader = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    box-sizing: border-box;
    background-color:rgb(85, 85, 120);
    color: #fff;
    width: 100%;
    left: 0;
    top: 0;
    height: 110px;
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
    justify-content: space-around;
`;

export { AppContainer, AppHeader, HeaderTitle, AppBody }
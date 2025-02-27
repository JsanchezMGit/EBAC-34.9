import styled from "styled-components";

const NotificationContainer = styled.div`
    position: fixed;
    background-color: #2E7D32;
    color: #ffffff;
    min-width: 300px;
    min-height: 100px;
    top: -100%;
    left: calc(50% - 150px);
    border-radius: 15px;
    align-content: center;
    text-align: center;
    transition: 1s;
    &.--shown {
        top: 85px;
    }
`;

export { NotificationContainer }
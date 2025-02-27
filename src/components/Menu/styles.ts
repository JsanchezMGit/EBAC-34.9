import styled from "styled-components";

const MenuContainer = styled.section<{ $left?: string; }>`
    position: fixed;
    top: 110px;
    left: ${props => props.$left};
    width: 100%;
    background-color:rgb(85, 85, 120);
    color: white;
    display: flex;
    align-items: center;
`;

const MenuUserName = styled.h2`
    margin: 0;
    padding: .5rem;
`;

const MenuNav = styled.nav`
    display: flex;
`;

const MenuNavItem = styled.ul`
    list-style:none;
    padding: .5rem;
    margin: 0;
    cursor: pointer;
`;

export { MenuContainer, MenuUserName, MenuNav, MenuNavItem }
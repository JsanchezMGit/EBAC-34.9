import { MenuContainer } from "./styles";
import menuIco from "./img/menu.png";
import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../../state/menu.slice";

const MenuIcon = () => {
    const dispatch = useDispatch();

    const handleMenuClick = (e:React.MouseEvent<HTMLElement>) => {
        dispatch(toogleMenu());
    }

    return(
        <MenuContainer onClick={handleMenuClick}>
            <img src={menuIco} alt="Icono del menu" />
        </MenuContainer>
    )
}

export default MenuIcon;
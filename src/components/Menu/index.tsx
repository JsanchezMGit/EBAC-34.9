import { useSelector } from "react-redux";
import { IState } from "../../interfaces/State";
import { User } from "../../types/User";
import { MenuContainer, MenuUserName, MenuNav, MenuNavItem } from "./styles";
import { Menu as MenuType } from "../../types/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggOff } from "../../state/user.slice";

const Menu = () => {
    const dispatch = useDispatch();
    const userStore = useSelector<IState, User>(state => state.user);
    const menuStore = useSelector<IState, MenuType>(state => state.menu);
    const navigate = useNavigate();
    const logOff = () => {
        dispatch(setUserLoggOff({}));
    }

    return(
        <MenuContainer $left={menuStore.open ? '0' : '-100%'}>
            <MenuUserName>Hola {userStore.logged ? userStore.userName : "Anonimo" }</MenuUserName>
            <MenuNav>
                { userStore.logged ? <MenuNavItem onClick={logOff}>Cerrar sesion</MenuNavItem> : <MenuNavItem onClick={() => {navigate("/");}}>Iniciar sesion</MenuNavItem> }
                <MenuNavItem onClick={() => {navigate("/products");}}>Productos</MenuNavItem>
            </MenuNav>
        </MenuContainer>
    )
};

export default Menu;
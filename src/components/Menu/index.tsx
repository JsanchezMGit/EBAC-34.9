import { useSelector } from "react-redux";
import { IState } from "../../interfaces/State";
import { MenuContainer, MenuUserName, MenuNav, MenuNavItem } from "./styles";
import { Menu as MenuType } from "../../models/Menu";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userLoggOff } from "../../state/session.slice";
import { Session } from "../../models/Session";

const Menu = () => {
    const dispatch = useDispatch();
    const sessionStore = useSelector<IState, Session>(state => state.session);
    const menuStore = useSelector<IState, MenuType>(state => state.menu);
    const navigate = useNavigate();
    const logOff = () => {
        dispatch(userLoggOff({}));
    }

    return(
        <MenuContainer $left={menuStore.open ? '0' : '-100%'}>
            <MenuUserName>Hola {sessionStore.user !== null ? sessionStore.user.userName : "Anonimo" }</MenuUserName>
            <MenuNav>
                <MenuNavItem onClick={() => {navigate("/register");}}>Registrarse</MenuNavItem>
                { sessionStore.user !== null  ? <MenuNavItem onClick={logOff}>Cerrar sesion</MenuNavItem> : <MenuNavItem onClick={() => {navigate("/login");}}>Iniciar sesion</MenuNavItem> }
                <MenuNavItem onClick={() => {navigate("/");}}>Productos</MenuNavItem>
            </MenuNav>
        </MenuContainer>
    )
};

export default Menu;
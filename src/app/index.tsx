import { Cart } from "../components/Cart";
import { Products } from "../components/Products";
import { AppContainer, AppHeader, HeaderTitle, AppBody } from "./styles";
import Login from "../components/Login";
import { CartIcon } from "../components/Cart/CartIcon";
import { Route, Routes } from "react-router";
import { BrowserRouter} from "react-router-dom";
import MenuIcon from "../components/Menu/MenuIcon";
import Menu from "../components/Menu";
import { Checkout } from "../components/Checkout";
import { Notification } from "../components/Notification";
import Register from "../components/Register";

export const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <AppHeader>
          <MenuIcon />
          <HeaderTitle>E-Comerse EBAC</HeaderTitle>
          <CartIcon />
        </AppHeader>
        <Menu />          
        <AppBody>
        <Routes>
          <Route path="/" element={ <Products /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>            
          <Cart />
        </AppBody>
      </BrowserRouter>
      <Notification />
    </AppContainer>
  );
};

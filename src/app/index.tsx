import { Cart } from "../components/Cart";
import { Products } from "../components/Products";
import { AppContainer, AppHeader, HeaderTitle, AppBody } from "./styles";

import { CartIcon } from "../components/Cart/CartIcon";

export const App = () => {
  return (
    <AppContainer>
      <AppHeader>
        <HeaderTitle>E-Comerse EBAC (testing)</HeaderTitle>
        <CartIcon />
      </AppHeader>
      <AppBody>
        <Products />
        <Cart />
      </AppBody>
    </AppContainer>
  );
};

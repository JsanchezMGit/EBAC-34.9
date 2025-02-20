import { CartIconContainer, CartCount } from "./styles";
import cartIcon from "./img/shopping_car.png";
import { useSelector } from "react-redux";
import { IState } from "../../../interfaces/State";
import { ICartItem } from "../../../interfaces/Cart";


export const CartIcon = () => {
    const cartStore = useSelector<IState, ICartItem[]>(state => state.cart.items);

    const cartCount = cartStore.map((item) => item.count).reduce((previous, current) => previous + current, 0);

    const handleCartIcoClick = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelector('.cartContainer')?.classList.toggle('--shown');
    }

    return (
        <CartIconContainer onClick={handleCartIcoClick}>
            <img src={cartIcon} alt="Icono de carrito de compra" />
            <CartCount className="cart-count">{cartCount < 10 ? `0${cartCount}` : `${cartCount}`}</CartCount>
        </CartIconContainer>
    )
}
import { useSelector } from "react-redux";
import { CheckoutContainer } from "./styles"
import { ICartItem } from "../../interfaces/Cart";
import { IState } from "../../interfaces/State";
import { CartCheckout, CartTitle, CartTitleContainer } from "../Cart/styles";
import { CartTotal } from "../Cart/CartTotal";
import { CartItemContainer, CartItemCount, CartItemImage, CartItemName, CartItemPrice } from "../Cart/CartItem/styles";
import { useDispatch } from "react-redux";
import { resetCart } from "../../state/cart.slice";
import { useNavigate } from "react-router";

export const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartStore = useSelector<IState, ICartItem[]>(state => state.cart.items);
    const cartHasItems = cartStore.length > 0;
    const cartItemsContent = cartStore.map(c => 
        (<CartItemContainer key={c.product.id} data-testid={c.product.id}>
            <CartItemCount>{c.count}</CartItemCount>
            <CartItemImage src={c.product.image} alt={`Producto ${c.product.title} en el carrito`} />
            <CartItemName>{c.product.title}</CartItemName>
            <CartItemPrice>${c.product.price}</CartItemPrice>
        </CartItemContainer>)
    );    
    const handleCheckoutClick = () => {
        document.getElementById('notificationContainer')?.classList.add('--shown');
        dispatch(resetCart({}));
        navigate("/");
    }

    return (
        <CheckoutContainer>
            <CartTitleContainer>
                <CartTitle>Confirmacion de productos</CartTitle>
                <CartCheckout aria-disabled={!cartHasItems} disabled={!cartHasItems} onClick={handleCheckoutClick}>Confirmar comprar</CartCheckout>
            </CartTitleContainer>
            {cartHasItems ? cartItemsContent : <p>Agrega algunos articulos</p> }
            {cartHasItems ? <CartTotal items={cartStore} /> : <></> }
        </CheckoutContainer>
    )
}
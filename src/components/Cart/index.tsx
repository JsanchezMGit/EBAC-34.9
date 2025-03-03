import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CartCheckout, CartClose, CartContainer, CartTitle, CartTitleContainer } from "./styles";
import { ICartItem } from "../../interfaces/Cart";
import { removeCartItem } from "../../state/cart.slice";
import { IState } from "../../interfaces/State";
import { CartTotal } from "./CartTotal";
import React from "react";
import { useNavigate } from "react-router";

export const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartStore = useSelector<IState, ICartItem[]>(state => state.cart.items);
    const handleRemoveItem = (id:number) => {
        dispatch(removeCartItem(id));
    }

    const cartHasItems = cartStore.length > 0;
    const cartItemsContent = cartStore.map(item => 
        (<CartItem key={item.product.id} product={item.product} count={item.count} onRemove={() => handleRemoveItem(item.product.id)} />)
    );

    const handleCloseCart = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.parentElement?.classList.remove('--shown');
    }

    const handleCheckoutClick = () => {
        navigate("/checkout");
    }

    return (
        <CartContainer className="cartContainer">
            <CartClose onClick={handleCloseCart}>X</CartClose>
            <CartTitleContainer>
                <CartTitle>Carrito</CartTitle>
                <CartCheckout disabled={!cartHasItems} onClick={handleCheckoutClick}>Comprar</CartCheckout>
            </CartTitleContainer>
            {cartHasItems ? <CartTotal items={cartStore} /> : <></> }
            {cartHasItems ? cartItemsContent : <p>Agrega algunos articulos</p> }
            {cartHasItems ? <CartTotal items={cartStore} /> : <></> }
        </CartContainer>
    )
}
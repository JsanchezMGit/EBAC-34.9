import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { CartClose, CartContainer, CartTitle } from "./styles"
import { ICartItem } from "../../interfaces/Cart";
import { removeCartItem } from "../../state/cart.slice";
import { IState } from "../../interfaces/State";
import { CartTotal } from "./CartTotal";
import React from "react";

export const Cart = () => {
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

    return (
        <CartContainer className="cartContainer">
            <CartClose onClick={handleCloseCart}>X</CartClose>
            <CartTitle>Carrito</CartTitle>
            {cartHasItems ? <CartTotal items={cartStore} /> : <></> }
            {cartHasItems ? cartItemsContent : <p>Agrega algunos articulos</p> }
            {cartHasItems ? <CartTotal items={cartStore} /> : <></> }
        </CartContainer>
    )
}
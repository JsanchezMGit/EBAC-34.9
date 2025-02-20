import React, { useState } from "react"
import { IProduct } from "../../interfaces/Product"
import { ProductContainer, ProductTitle, ProductImage, ProductPrice, AddProduct } from "./styles"
import { ICart } from "../../interfaces/Cart"
import { useDispatch } from "react-redux"
import { addCartItem, updateCartItem } from "../../state/cart.slice";


export const Product = ({data}:IProduct) => {
    const [cartState, setCartState] = useState<ICart>({items: []});
    const dispatch = useDispatch();

    const handleAddProduct = (e: React.MouseEvent<HTMLElement>)  => {
        const productId = Number(e.currentTarget.getAttribute("data-id"));
        const cartItemFound = cartState.items.find(c => c.product.id === productId);
        const newProduct = {product: data, count: cartItemFound !== undefined ? cartItemFound.count+1 : 1};
        const cartStateBufer = {items: [...cartState.items.filter(c => c.product.id !== productId), newProduct]};
        setCartState(cartStateBufer);
        if (newProduct.count === 1) {
            dispatch(addCartItem(newProduct));
        } else {
            dispatch(updateCartItem(newProduct));
        }
    }

    return(
        <ProductContainer>
            <ProductTitle>{data.title}</ProductTitle>
            <ProductImage src={data.image} alt={data.title} />
            <ProductPrice>${data.price}</ProductPrice>
            <AddProduct data-id={data.id} onClick={handleAddProduct}>Agregar al carrito</AddProduct>
        </ProductContainer>
    )
}
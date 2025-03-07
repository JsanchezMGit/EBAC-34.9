import React from "react"
import { IProduct } from "../../interfaces/Product"
import { ProductContainer, ProductTitle, ProductImage, ProductPrice, AddProduct } from "./styles"
import { ICartItem } from "../../interfaces/Cart"
import { useDispatch } from "react-redux"
import { addCartItem, updateCartItem } from "../../state/cart.slice";
import { useSelector } from "react-redux"
import { IState } from "../../interfaces/State"


export const Product = ({data}:IProduct) => {
    const cartStore = useSelector<IState, ICartItem[]>(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddProduct = (e: React.MouseEvent<HTMLElement>)  => {
        const productId = Number(e.currentTarget.getAttribute("data-id"));
        const cartItemFound = cartStore.find(c => c.product.id === productId);
        const newProduct = {product: data, count: cartItemFound !== undefined ? cartItemFound.count+1 : 1};
        if (newProduct.count === 1) {
            dispatch(addCartItem(newProduct));
        } else {
            dispatch(updateCartItem(newProduct));
        }
    }

    return(
        <ProductContainer>
            <ProductTitle>{data.title}</ProductTitle>
            <ProductImage src={data.image} alt={`Foto producto - ${data.title}`} />
            <ProductPrice>${data.price}</ProductPrice>
            <AddProduct data-id={data.id} onClick={handleAddProduct}>Agregar al carrito</AddProduct>
        </ProductContainer>
    )
}
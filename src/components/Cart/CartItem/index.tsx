import { ICartItemA } from "../../../interfaces/Cart"
import removeIcon from "./img/remove.png"
import { CartItemContainer, CartItemImage, CartItemName, CartItemDeleteIcon, CartItemCount, CartItemPrice } from "./styles"

export const CartItem = ({product, count, onRemove}:ICartItemA) => {
    return(
        <CartItemContainer data-testid={product.id}>
            <CartItemCount>{count}</CartItemCount>
            <CartItemImage src={product.image} alt={`Producto ${product.title} en el carrito`} />
            <CartItemName>{product.title}</CartItemName>
            <CartItemPrice>${product.price}</CartItemPrice>
            <CartItemDeleteIcon><img src={removeIcon} role="button" aria-label={`Remover producto ${product.title} del carrito`} alt="Icono de remover producto del carrito" className="delete-icon" onClick={onRemove} /></CartItemDeleteIcon>
        </CartItemContainer>
    )
}
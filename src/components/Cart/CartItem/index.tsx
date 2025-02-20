import { ICartItemA } from "../../../interfaces/Cart"
import removeIcon from "./img/remove.png"
import { CartItemContainer, CartItemImage, CartItemName, CartItemDeleteIcon, CartItemCount, CartItemPrice } from "./styles"

export const CartItem = ({product, count, onRemove}:ICartItemA) => {
    return(
        <CartItemContainer data-testid={product.id}>
            <CartItemCount>{count}</CartItemCount>
            <CartItemImage src={product.image} alt={product.title} />
            <CartItemName>{product.title}</CartItemName>
            <CartItemPrice>${product.price}</CartItemPrice>
            <CartItemDeleteIcon><img src={removeIcon} alt="Icono de remover producto del carrito" className="delete-icon" onClick={onRemove} /></CartItemDeleteIcon>
        </CartItemContainer>
    )
}
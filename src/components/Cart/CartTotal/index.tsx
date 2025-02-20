import { ICart } from "../../../interfaces/Cart"
import { CartTotalContainer } from "./stiles"

export const CartTotal = ({items}:ICart) => {
    return(
        <CartTotalContainer>
            <p>Total</p>
            <p>${ items.length > 0 ? items.map((item) => item.product.price * item.count).reduce((previous, current) => previous + current, 0).toFixed(2) : '0.00' }</p>
        </CartTotalContainer>
    )
}
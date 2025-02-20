import { Product } from "../types/Product";
import { ICart } from "./Cart";

export interface IState {
    cart: ICart,
    product: IProduct
}

export interface IProduct {
    status: string,
    products: Product[]
}
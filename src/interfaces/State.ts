import { Menu } from "../types/Menu";
import { Product } from "../types/Product";
import { User } from "../types/User";
import { ICart } from "./Cart";

export interface IState {
    cart: ICart,
    product: IProduct
    user: User,
    menu: Menu
}

export interface IProduct {
    status: string,
    products: Product[]
}
import { Menu } from "../models/Menu";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { ICart } from "./Cart";
import { Session } from "../models/Session";

export interface IState {
    cart: ICart,
    product: IProduct
    user: User[],
    menu: Menu,
    session: Session,
}

export interface IProduct {
    status: string,
    products: Product[]
}
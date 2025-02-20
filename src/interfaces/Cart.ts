import { Product } from "../types/Product";

export interface ICart {
    items: ICartItem[]
}

export interface ICartItem {
    product: Product,
    count: number
}

export interface ICartItemA extends ICartItem {
    onRemove: React.MouseEventHandler<HTMLImageElement>
}
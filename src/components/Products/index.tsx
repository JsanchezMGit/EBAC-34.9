import { Product } from "../Product";
import { ProductsContainer } from "./styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IDLE, LOADING, SUCCEEDED, FAILED } from "../../state/status";
import { fetchProducts } from "../../state/product.slice";
import store from "../../app/store";
import { IState, IProduct } from "../../interfaces/State";

export const Products = () => {
    const dispatch = store.dispatch;
    const productsStore = useSelector<IState, IProduct>(state => state.product);

    useEffect(() => {
        productsStore?.status === IDLE && dispatch(fetchProducts());
    }, [dispatch, productsStore?.status]);

    return(
        <ProductsContainer>
            { 
                productsStore?.status === LOADING ? <p>Cargando datos</p> :
                productsStore?.status === SUCCEEDED && productsStore?.products ? productsStore.products.map(product => (<Product key={product.id} data={product} />)) :
                productsStore?.status === FAILED ? <p>Ocurrio un error al cargar los productos</p> :
                <></>
            }
        </ProductsContainer>
    )
}
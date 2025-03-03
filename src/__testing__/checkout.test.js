import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import { addCartItem } from "../state/cart.slice";
import { Checkout } from "../components/Checkout";
import "@testing-library/jest-dom";
import { Notification } from "../components/Notification";

test("El boton de 'Confirmar comprar' debe estar deshabilitado si no hay productos en el carrito de compras", async () => {
    render(<Provider store={store}><MemoryRouter><Checkout/></MemoryRouter></Provider>);
    expect(screen.getByText("Confirmar comprar")).toBeDisabled();
});

test("Se debe mostrar el mensaje de 'El pedio se realizo correctamente' despues de hacer clic en el boton de 'Confirmar comprar'", async () => {
    const product = {
        id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    };
    const newProduct = {product: product, count: 1};
    await store.dispatch(addCartItem(newProduct));
    render(<Provider store={store}><MemoryRouter><Checkout/></MemoryRouter><Notification /></Provider>);
    await fireEvent.click(screen.getByText("Confirmar comprar"));
    expect(screen.getByText("El pedio se realizo correctamente").classList.contains("--shown")).toBeTruthy();
});

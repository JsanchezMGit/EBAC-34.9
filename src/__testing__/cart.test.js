import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import { Cart } from "../components/Cart";
import { Product } from "../components/Product";
import { AppHeader } from "../app/styles";
import { CartIcon } from "../components/Cart/CartIcon";
import { MemoryRouter, Route, Routes } from "react-router";
import { addCartItem } from "../state/cart.slice";
import { Checkout } from "../components/Checkout";
import "@testing-library/jest-dom";

test("El carrito de compra no se debe mostrar abierto", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/"]}><Cart/></MemoryRouter></Provider>);
    expect(screen.getByText("Carrito").parentElement.className.indexOf("--shown") === -1).toBeTruthy();
});

test("Al hacer clic en el icono del carrito se debe abrir la seccion del carrito de compras", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/"]}><AppHeader><CartIcon /></AppHeader><Cart /></MemoryRouter></Provider>);
    fireEvent.click(screen.getByAltText("Icono de carrito de compra").parentElement);
    expect(screen.getByText("X").parentElement.className.indexOf("--shown") > -1).toBeTruthy();
});

test("Al hacer clic en el boton 'X' del carrito de compras se debe cerrar la seccion del carrito de compras", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/"]}><Cart/></MemoryRouter></Provider>);
    const cartCloseElement = screen.getByText("X");
    fireEvent.click(cartCloseElement);
    expect(screen.getByText("Carrito").parentElement.className.indexOf("--shown") === -1).toBeTruthy();
});

test("La seccion del carrito de compras, debe mostrar el mensaje 'Agrega algunos articulos' si no existen productos agregados", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/"]}><Cart/></MemoryRouter></Provider>);
    expect(screen.getByText("Agrega algunos articulos")).toBeDefined();
});

test("Al hacer clic en el boton del icono del bote de basura, se debe eliminar el producto de la seccion del carrito de compras", async () => {
    const product = {
        id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    };
    render(<Provider store={store}><MemoryRouter initialEntries={["/"]}><Product key={product.id} data={product} /><Cart/></MemoryRouter></Provider>);
    const addToCartElement = screen.getByText("Agregar al carrito");
    fireEvent.click(addToCartElement);
    const productElementsAdded = await screen.findAllByText(`${product.title}`);
    expect(productElementsAdded.length == 2).toBeTruthy();
    const removeCartElement = screen.getByAltText("Icono de remover producto del carrito");
    fireEvent.click(removeCartElement);
    const productElementsRemoved = await screen.findAllByText(`${product.title}`);
    expect(productElementsRemoved.length == 1).toBeTruthy();
});

test("El boton de 'Comprar' debe estar deshabilitado si no hay productos en el carrito de compras", async () => {
    render(<Provider store={store}><MemoryRouter><Cart/></MemoryRouter></Provider>);
    expect(screen.getByText("Comprar")).toBeDisabled();
});

test("Se debe de dirigir a la seccion de checkout cuando se haga clic en el boton 'Comprar' del carrito de compras", async () => {
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

    render(<Provider store={store}>
            <MemoryRouter>
               <Routes>
                    <Route path="/" element={ <></> } />
                    <Route path="/checkout" element={ <Checkout /> } />
                </Routes>
            <Cart/>
            </MemoryRouter>
           </Provider>);

    await fireEvent.click(screen.getByText("Comprar"));
    expect(screen.getByText("Confirmacion de productos")).toBeInTheDocument();
});
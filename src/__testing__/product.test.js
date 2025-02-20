import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from "../app/store";
import { Product } from "../components/Product";
import { Cart } from "../components/Cart";

test("Al hacer clic en el boton de “Agregar producto” de algun producto se debe modificar la seccion del carrito con los datos del producto", async () => {
    const mockProduct = {
        id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    };
    render(<Provider store={store}><Product key={mockProduct.id} data={mockProduct} /><Cart/></Provider>);
    const addToCartElement = screen.getByText("Agregar al carrito");
    fireEvent.click(addToCartElement);
    const productElements = await screen.findAllByText(`${mockProduct.title}`);
    expect(productElements.length == 2).toBeTruthy();
});
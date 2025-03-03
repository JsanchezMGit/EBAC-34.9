import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import { Products } from "../components/Products";
import "@testing-library/jest-dom";
import { fetchProducts } from "../state/product.slice";

beforeEach(() => {
  store.dispatch({ type: "RESET_STORE" });
});

test("Se debe mostrar el mensaje 'Cargando datos' mientras se cargan los productos", async () => {
  jest.spyOn(require("../state/product.slice"), "fetchProducts").mockImplementation(() => 
    async (dispatch) => { dispatch({ type: "products/fetch/pending" }); }
  );
  await store.dispatch(fetchProducts());
  render(<Provider store={store}><Products /></Provider>);
  expect(screen.getByText("Cargando datos")).toBeInTheDocument();
});

test("Se debe mostrar el mensaje 'Ocurrio un error al cargar los productos' si la carga de productos falla", async () => {
  jest.spyOn(require("../state/product.slice"), "fetchProducts").mockImplementation(() => 
    async (dispatch) => { dispatch({ type: "products/fetch/rejected" }); }
  );
  await store.dispatch(fetchProducts());
  render(<Provider store={store}><Products /></Provider>);
  expect(screen.getByText("Ocurrio un error al cargar los productos")).toBeInTheDocument();
});

test("Al cargar la aplicación de deben de llenar los productos", async () => {
  const mockProducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ];

  jest.spyOn(require("../state/product.slice"), "fetchProducts").mockImplementation(() => 
    async (dispatch) => { dispatch({ type: "products/fetch/fulfilled", payload: mockProducts });}
  );

  await store.dispatch(fetchProducts());
  render(<Provider store={store}><Products /></Provider>);
  expect((await screen.findAllByText("Agregar al carrito")).length === mockProducts.length).toBeTruthy();
});
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Products } from "../components/Products";
import Register from "../components/Register";

test("Se debe mostrar el mensaje 'El nombre de usuario ya se encuentra registrado' cuando se introduca un nombre de usuario ya registrado", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/register"]}><Register/></MemoryRouter></Provider>);
    fireEvent.change(screen.getByLabelText("Nombre de usuario"), {target: {value: "EBAC"}});
    fireEvent.change(screen.getByLabelText("Contraseña"), {target: {value: "EBAC123"}});
    fireEvent.change(screen.getByLabelText("Confirma contraseña"), {target: {value: "EBAC123"}});
    fireEvent.click(screen.getByText("Registrar"));
    expect(screen.getByText("El nombre de usuario ya se encuentra registrado")).toBeInTheDocument();
});

test("Se debe mostrar el mensaje 'La contraseña y la confirmacion no son iguales' cuando se introduscan valores diferentes en contraseña y confirmacion", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/register"]}><Register/></MemoryRouter></Provider>);
    fireEvent.change(screen.getByLabelText("Nombre de usuario"), {target: {value: "EBAC1"}});
    fireEvent.change(screen.getByLabelText("Contraseña"), {target: {value: "EBAC1234"}});
    fireEvent.change(screen.getByLabelText("Confirma contraseña"), {target: {value: "EBAC123"}});
    fireEvent.click(screen.getByText("Registrar"));
    expect(screen.getByText("La contraseña y la confirmacion no son iguales")).toBeInTheDocument();
});

test("Se debe de dirigir a la seccion de productos cuando se introduca una combinacion de usuario, contraseña y confirmacion correcta", async () => {
    render(<Provider store={store}>
            <MemoryRouter initialEntries={["/register"]}>
                <Routes>
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/" element={ <Products /> } />
                </Routes>
            </MemoryRouter>
           </Provider>);
    fireEvent.change(screen.getByLabelText("Nombre de usuario"), {target: {value: "EBAC1"}});
    fireEvent.change(screen.getByLabelText("Contraseña"), {target: {value: "EBAC123"}});
    fireEvent.change(screen.getByLabelText("Confirma contraseña"), {target: {value: "EBAC123"}});
    fireEvent.click(screen.getByText("Registrar"));
    expect(screen.getByText("Cargando datos")).toBeInTheDocument();
});
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "../components/Login";
import { Products } from "../components/Products";

test("Se debe mostrar el mensaje 'El usuario y/o contraseña no son correctos' cuando se introduca una combinacion de usuario y contraseña incorrecta", () => {
    render(<Provider store={store}><MemoryRouter initialEntries={["/login"]}><Login/></MemoryRouter></Provider>);
    fireEvent.change(screen.getByLabelText("Nombre de usuario"), {target: {value: "EBAC"}});
    fireEvent.change(screen.getByLabelText("Contraseña"), {target: {value: "EBAC123"}});
    fireEvent.click(screen.getByText("Entrar"));
    expect(screen.getByText("El usuario y/o contraseña no son correctos")).toBeInTheDocument();
});

test("Se debe de dirigir a la seccion de productos cuando se introduca una combinacion de usuario y contraseña correcta", async () => {
    render(<Provider store={store}>
            <MemoryRouter>
                <Routes>
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/" element={ <Products /> } />
                </Routes>
            </MemoryRouter>
           </Provider>);
    fireEvent.change(screen.getByLabelText("Nombre de usuario"), {target: {value: "EBAC"}});
    fireEvent.change(screen.getByLabelText("Contraseña"), {target: {value: "@EBAC123.-"}});
    fireEvent.click(screen.getByText("Entrar"));
    expect(screen.getByText("Cargando datos")).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Notification } from "../components/Notification";
import store from "../app/store";

test("No se debe mostrar el area de notificacion al inicio de la aplicacion", async () => {
    render(<Provider store={store}><Notification /></Provider>);
    expect(screen.getByText("El pedio se realizo correctamente").classList.contains("--shown")).toBeFalsy();
});
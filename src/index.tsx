import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { Provider } from "react-redux";
import store from "./app/store";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>    
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>        
    </ThemeProvider>
  </React.StrictMode>
);
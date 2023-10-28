import React from "react";
import { MainRouter } from "./components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { themeConfig } from "./assets/theme/themeConfig";
import "./assets/styles/styles.scss";

function App() {
  return (
    <section className="container">
      <ThemeProvider theme={themeConfig}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </section>
  );
}

export default App;

import React, { useReducer, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MenuContext from "./context/MenuContext";

import Routes from "./routes";

import GlobalStyle from "./styles";
import Conteudo from "./styles/conteudo";
import Header from "./styles/header";

import Menu from "./styles/menu";

function App() {
  let [menuAberto, setMenuAberto] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <MenuContext.Provider value={{ menuAberto, setMenuAberto }}>
        <Header />
        <Menu />
        <Conteudo />
      </MenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;

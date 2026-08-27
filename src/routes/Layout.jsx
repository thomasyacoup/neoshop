import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx"

function Layout() {
  const [cartProducts, setCartProducts] = useState([]);

  const Main = styled.main`
    display: flex;
    flex-direction: column;
  `

  return (
    <Main>
      <Header cart={cartProducts} />
      <Outlet context={{ cartProducts, setCartProducts }} />
    </Main>
  );
}

export default Layout;

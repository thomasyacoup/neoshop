import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";

function Layout() {
  const [cartProducts, setCartProducts] = useState([]);

  const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `

  return (
    <Main>
      <Header cart={cartProducts} />
      <Outlet context={{ cartProducts, setCartProducts }} />
      <Footer />
    </Main>
  );
}

export default Layout;

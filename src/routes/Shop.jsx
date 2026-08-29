import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Container } from "../components/ui/Container";
import Filters from "../components/ui/Filters";
import { useState } from "react";
import Products from "../components/ui/Products";

const ShopContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.black};
  text-transform: uppercase;
  text-decoration: underline solid 5px ${({ theme }) => theme.colors.accent};
  text-underline-offset: 8px;
`;

const Pargraph = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`


function Shop() {
  const { cartProducts, setCartProducts } = useOutletContext();

  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Men", "Women", "Electronics", "Arts"];

  const { data, loading, err } = useProducts();

  const addItemToCart = (item) => setCartProducts([...cartProducts, item])

  if (loading) return "loading";
  if (err) return "err";
  return (
    <ShopContainer>
      <HeaderWrapper>
        <Heading>
          ALL Products
        </Heading>
        <Pargraph>
          Browse our unapologetically raw collection. High energy, zero compromises.
        </Pargraph>
      </HeaderWrapper>
      <ProductsWrapper>
        <Filters tabs={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Products products={data} addItemToCart={addItemToCart}/>
      </ProductsWrapper>
    </ShopContainer>
  );
}

export default Shop;

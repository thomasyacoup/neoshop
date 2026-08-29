import styled from "styled-components";
import { useOutletContext, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Container } from "../components/ui/Container";

// Header
// Pargraph
// Filters
// Products 
// Pagination

const ShopContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
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

function Shop() {
  const { data, loading, err } = useProducts();
  const { cartProducts, setCartProducts } = useOutletContext();

  const categories = ["men", "women", "jeweley", "electronics"];

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
    </ShopContainer>
  );
}

export default Shop;

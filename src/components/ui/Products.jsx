import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";


const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 2px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.md} ${({ theme }) => theme.colors.shadow};
  height: 500px;
  background-color: ${({ theme }) => theme.colors.surface};;
`

const StyledImg = styled.img`
  max-width: 100%;
  height: 50%;
  object-fit: contain;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
` 

const ProductInfo = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.lg};
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`
const ActionWrapper = styled(InfoWrapper)`
  margin-top: auto;
`
const ProductTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; 
`

const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.black};
  filter: brightness(0.8);
`
const StyledQuantity = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.border};
`
const QuantityChange = styled.button`
  border: none;
  outline: none;
  width: 20px;
  transition: 200ms;
  background-color: ${({ theme }) => theme.colors.neutral};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover:disabled {
    background-color: ${({ theme }) => theme.colors.neutral};
  }
  &:disabled {
    filter: brightness(0.8);
  }
  
`

const Quantity = styled.div`
  flex-grow: 1;
  text-align: center;
  border-right: 2px solid ${({ theme }) => theme.colors.border};
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm};
`

function Product({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityInc = () => setQuantity(quantity + 1)
  const handleQuantityDec = () => {
    if (quantity == 1) return;
    setQuantity(quantity - 1)
  }
  const handleAddToCart = () => {
    addToCart()
    setQuantity(1)
  }
  
  return (
    <StyledProduct>
      <StyledImg src={item.image} />
      <ProductInfo>
        <InfoWrapper>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>${item.price}</ProductPrice>
        </InfoWrapper>
        <ActionWrapper>
          <StyledQuantity>
            <QuantityChange disabled={quantity == 1} onClick={handleQuantityDec}>
              -
            </QuantityChange>
            <Quantity>
              {quantity}
            </Quantity>
            <QuantityChange onClick={handleQuantityInc}>
              +
            </QuantityChange>
          </StyledQuantity>
          <Button onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </ActionWrapper>
      </ProductInfo>
    </StyledProduct>
  );
}

const StyledProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: repeat(2, 1fr); 
  }
  
  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(4, 1fr); 
  }
`

function Products({products, setCart, cart}) {
  return (
    <StyledProducts>
      {
        products.map(product => (
          <Product item={product} addToCart={() => setCart([...cart, product])} />
        ))
      }
    </StyledProducts>
  )
}

export default Products;

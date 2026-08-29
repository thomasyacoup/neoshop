import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/ui/Container";
import Button from "../components/ui/Button"

const CartContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CheckOutCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  border: 3px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.lg} ${({ theme }) => theme.colors.shadow};
`

const StyeldSummary = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.border};
`
const SummaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`
const DiscountInfo = styled(SummaryInfo)`
  color: ${({ theme }) => theme.colors.error};;
`
const TotalInfo = styled(SummaryInfo)`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.lg};
`

const Space = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
`
const Ad = styled.div`
  align-self: center;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 3px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.neutral};
  width: fit-content;
  font-size: ${({ theme }) => theme.fonts.size.xs};;
  transform: rotate(-8deg);
`

function Cart() {
  const { cartProducts } = useOutletContext();

  return (
    <CartContainer>
      <CheckOutCard>
        <StyeldSummary>Summary</StyeldSummary>
        <StyledHr />
        <Space />
        <SummaryInfo>
          <span>Items({cartProducts.length}):</span>
          <span>${cartProducts.reduce((prev, cur) => prev + cur.price, 0)}</span>
        </SummaryInfo>
        <SummaryInfo>
          <span>Shipping:</span>
          <span>$20</span>
        </SummaryInfo>
        <DiscountInfo>
          <span>Discount:</span>
          <span>$15</span>
        </DiscountInfo>
        <Space />
        <StyledHr />
        <TotalInfo>
          <span>Total:</span>
          <span>${cartProducts.reduce((prev, cur) => prev + cur.price, 0) + 20 - 15}</span>
        </TotalInfo>
        <Space />
        <Button size="lg" variant="secondary">
          Check Out
        </Button>
        <Space />
        <Ad>Free shipping over $150!</Ad>
        <Space />
      </CheckOutCard>
    </CartContainer>
  );
}

export default Cart;

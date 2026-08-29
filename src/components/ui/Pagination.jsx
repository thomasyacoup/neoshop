import styled from "styled-components"
import Button from "./Button"

const PagintaionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

function Pagintaion() {
  return (
    <PagintaionContainer>
      <Button disabled variant="neutral">
        {"<"}
      </Button>
      <Button>
        1
      </Button>
      <Button variant="neutral">
        2
      </Button>
      <Button variant="neutral">
        ...
      </Button>
      <Button variant="neutral">
        {">"}
      </Button>
    </PagintaionContainer>
  )
}

export default Pagintaion;
import styled from "styled-components";
import { Container } from "./ui/Container";

const StyledBrand = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fonts.weight.black};
  font-size: ${({ theme }) => theme.fonts.size.lg};
`
const StyledCredit = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};

  & a {
    font-style: italic;
    color: inherit;

  }
`


const StyledFooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: auto;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledBrand>
          NEOSHOP
        </StyledBrand>
        <StyledCredit>
          MADE BY <a href="https://github.com/thomasyacoup">ThomasYacoub</a>
        </StyledCredit>
      </StyledFooterContainer>
    </StyledFooter>
  )
}

export default Footer
import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`

function Nav({children}) {
  return (
    <StyledNav>
      {children}
    </StyledNav>
  )
}

const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  text-transform: uppercase;
  text-decoration: none;
  transition: 100ms;
  text-underline-offset: 5px;

  &:hover, &.active {
    color: color-mix(in oklab, ${({ theme }) => theme.colors.primary}, black 30%) !important;
    text-decoration: underline 2px;
  }
  
  &:visited {
    color: ${({ theme }) => theme.colors.foreground};
  }
`

function NavLink({children, to}) {
  return (
    <StyledNavLink to={to}>
      {children}
    </StyledNavLink>
  )
}

const StyledCartLink = styled(StyledNavLink)`
  position: relative;

  &::after {
    content: "${props => props.itemsLength}";

    color: ${({ theme }) => theme.colors.onAccent};;
    background-color: ${({ theme }) => theme.colors.accent};;
    font-size: ${({ theme }) => theme.fonts.size.sm};;
    font-family: monospace;
    
    padding: 2px;
    line-height: 80%;
    border: 2px solid ${({ theme }) => theme.colors.border};

    position: absolute;
    top: -8px;
    right: -18px;
  }
`

function CartLink({children, itemsLength, to}) {
  return (
    <StyledCartLink itemsLength={itemsLength} to={to}>
      {children}
    </StyledCartLink>
  )  
}

Nav.NavLink = NavLink
Nav.CartLink = CartLink

export default Nav
import styled from "styled-components"
import { Container } from "./ui/Container"
import Nav from "./ui/Nav"
import Search from "./ui/Search"
import Drawer from "./ui/Drawer"
import { useState } from "react"

const StyledHeader = styled.header`
  box-shadow: ${({ theme }) => theme.shadow.md} ${({ theme }) => theme.colors.shadow};;;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};;
`
const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
`

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.black};
  font-style: italic;
`

const DesktopViewWrapper = styled.div`
  flex-grow: 0.5;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;  
  }
` 

function Header({ cart }) {
  const [activeDrawer, setActiveDrawer] = useState(false)
  
  const handleToggleDrawer = () => {setActiveDrawer(!activeDrawer)}
  
  return (
    <StyledHeader>
      <HeaderContainer>
        <Heading>NEOSHOP</Heading>
        <DesktopViewWrapper>
          <Nav>
            <Nav.NavLink to={"/"}>
              Home
            </Nav.NavLink>
            <Nav.NavLink to={"/shop"}>
              Shop
            </Nav.NavLink>
            <Nav.CartLink itemsLength={cart.length} to={"/cart"}>
              Cart
            </Nav.CartLink>
          </Nav>
          <Search />
        </DesktopViewWrapper>
        <Drawer active={activeDrawer}>
          <Drawer.CloseBtn onClick={handleToggleDrawer}>X</Drawer.CloseBtn>
          <Search />
          <Nav.NavLink to={"/"} onClick={handleToggleDrawer}>
            Home
          </Nav.NavLink>
          <Nav.NavLink to={"/shop"} onClick={handleToggleDrawer}>
            Shop
          </Nav.NavLink>
          <Nav.CartLink itemsLength={cart.length} to={"/cart"} onClick={handleToggleDrawer}>
            Cart
          </Nav.CartLink>
        </Drawer>
        <Drawer.DrawerBackDrop display={activeDrawer ? "block" : "none"} onClick={handleToggleDrawer}/>
        <Drawer.DrawerTrigger onClick={handleToggleDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </Drawer.DrawerTrigger>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
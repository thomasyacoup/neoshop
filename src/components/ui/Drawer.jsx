import styled from "styled-components";
import { StyledButton } from "./Button";

const StyledDrawer = styled.aside`
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 100vh;
  width: 250px;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bg};
  
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`

function Drawer({children, active}) {
  return (
    <StyledDrawer display={active ? "flex" : "none"}>
      {children}
    </StyledDrawer>
  )
}

const DrawerBackDrop = styled.div`
  content: "";
  display: ${props => props.display};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  backdrop-filter: blur(2px);
`

const StyledCloseBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 9999px;
  line-height: 80%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};;

  &:hover {
    filter: brightness(0.8);
  }
`

function CloseBtn({children, onClick}) {
  return (
    <StyledCloseBtn onClick={onClick}>
      {children}
    </StyledCloseBtn>
  )
}

  const StyledDrawerTrigger = styled(StyledButton).attrs({
    $variant: 'accent',
    $size: 'sm',
  })`
    padding: ${({ theme }) => theme.spacing.sm};
    @media (min-width: ${({ theme }) => theme.media.tablet}) {
      display: none;
    }
  `

function DrawerTrigger({children, onClick}) {
  return (
    <StyledDrawerTrigger onClick={onClick}>
      {children}
    </StyledDrawerTrigger>
  )
}

Drawer.DrawerTrigger = DrawerTrigger
Drawer.CloseBtn = CloseBtn
Drawer.DrawerBackDrop = DrawerBackDrop

export default Drawer;
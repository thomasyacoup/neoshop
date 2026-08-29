import styled from "styled-components";
import Button from "./Button";

const StyledFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`

function Filter({children, isActive, onClick}) {
  return (
    <Button size="sm" variant={isActive ? "primary" : "neutral"} onClick={onClick}>
      {children}
    </Button>
  )
}

function Filters({tabs, activeFilter, setActiveFilter}) {
  return (
    <StyledFilters>
      {
        tabs.map(tab => (
          <Filter isActive={tab == activeFilter} onClick={() => setActiveFilter(tab)}>
            {tab}
          </Filter>
        ))
      }
    </StyledFilters>
  )
}

export default Filters
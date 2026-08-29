import styled from "styled-components";

const StyledSearchBar = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.md} ${({ theme }) => theme.colors.shadow};
  width: fit-content;

  display: flex;
`

const SearchInput = styled.input.attrs({type: "text"})`
  padding: ${({ theme }) => theme.spacing.sm};;
  max-width: 200px;
  border: none;
  outline: none;

  &:focus {
    background-color: ${({ theme }) => theme.colors.bg};;
  }
`

const SearchBtn = styled.button`
  border: none;
  outline: none;
  line-height: 0%;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  padding: ${({ theme }) => theme.spacing.sm};;
  transition: 200ms;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.5);
  }
`

function Search() {
  return (
    <StyledSearchBar>
      <SearchInput placeholder="Search..."/>
      <SearchBtn>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" width="16px">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

      </SearchBtn>
    </StyledSearchBar>
  )
}

export default Search;
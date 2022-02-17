import styled from 'styled-components'

import IconSearch from 'assets/icon-search.svg'

const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <img src={IconSearch} alt="Search" />
      <input type="text" placeholder="Search GitHub username…" />
      <button>Search</button>
    </StyledSearchBar>
  )
}

export default SearchBar
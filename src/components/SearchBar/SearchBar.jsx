import styled from 'styled-components'

import IconSearch from 'assets/icon-search.svg'

const UnstyledSearchBar = ({ className }) => {
  return (
    <div className={className}>
      <SearchIcon>
        <img src={IconSearch} alt="Search" />
      </SearchIcon>
      
      <input type="text" placeholder="Search GitHub username…" />
      <button>Search</button>
    </div>
  )
}

const SearchBar = styled(UnstyledSearchBar)`
  align-items: center;
  background: ${(props) => props.theme.colors.almostWhite};
  border-radius: 0.7rem;
  display: grid;
  grid-template-columns: auto 1fr auto;

  button {
    background: ${props => props.theme.colors.brightBlue};
    border: none;
    border-radius: 1rem;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font};
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 2.1rem;
    margin: 0.7rem;
    padding: 1.25rem 1.4rem 1.25rem 1.8rem;
  }

  img {
    height: 2rem;
    width: 2rem;
  }

  input {
    border: none;
    font-family: ${props => props.theme.font};
    font-size: 1.3rem;
    line-height: 2.5rem;
    margin-left: 0.9rem;
  }
`

const SearchIcon = styled.div`
  padding-left: 1.6rem;
`

export default SearchBar
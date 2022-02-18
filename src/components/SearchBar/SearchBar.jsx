import { useState } from 'react'

import styled from 'styled-components'

import IconSearch from 'assets/icon-search.svg'

const UnstyledSearchBar = ({ className, children, error, setName }) => {
  const [inputName, setInputName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputName) setName(inputName)
  }

  return (
    < form className={className} onSubmit={handleSubmit} >
      <SearchIcon>
        <img src={IconSearch} alt="Search" />
      </SearchIcon>
      <input
        onChange={(event) => setInputName(event.target.value)}
        placeholder="Search GitHub username…"
        type="text"
        value={inputName}
      />
      <button>Search</button>
    </form >
  )

}

const SearchBar = styled(UnstyledSearchBar)`
  align-items: center;
  background: ${props => props.theme.colors.searchBg};
  box-shadow: ${props => props.theme.name === 'light' ? '0 1.6rem 3rem -0.1rem rgba(70, 96, 187, 0.2)' : 'none'};
  border-radius: 0.7rem;
  display: grid;
  grid-template-columns: auto 1fr auto;

  button {
    background: ${props => props.theme.colors.searchBtnBg};
    border: none;
    border-radius: 1rem;
    color: ${props => props.theme.colors.searchBtnText};
    font-family: ${props => props.theme.font};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.12rem;
    line-height: 2.1rem;
    margin: 0.7rem;
    padding: 1.25rem 1.4rem 1.25rem 1.8rem;
  }

  img {
    height: 2rem;
    width: 2rem;
  }

  input {
    background: ${props => props.theme.colors.searchBg};
    border: none;
    color: ${props => props.theme.colors.searchText};
    font-family: ${props => props.theme.font};
    font-size: 1.3rem;
    line-height: 2.5rem;
    margin-left: 0.7rem;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${props => props.theme.colors.searchPlaceholder};
      opacity: 0.4;
    }
    :-ms-input-placeholder {
      color: ${props => props.theme.colors.searchPlaceholder};
      opacity: 0.4;
    }
  }
`

const SearchIcon = styled.div`
  padding-left: 1.6rem;
`

export default SearchBar
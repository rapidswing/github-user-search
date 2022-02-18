import { useState } from 'react'

import styled from 'styled-components'

import IconSearch from 'assets/icon-search.svg'

const UnstyledErrorMessage = ({ className }) => (
  <div className={className}>No results</div>
)

const ErrorMessage = styled(UnstyledErrorMessage)`
  align-items: center;
  background: ${props => props.theme.colors.searchBg};
  color: ${props => props.theme.colors.errorText};
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: bold;
  height: 100%;
  line-height: 2.2rem;
  padding-left: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`

const UnstyledInputContainer = ({ className, clearError, error, inputName, setInputName }) => {
  const handleChange = (event) => {
    clearError()
    setInputName(event.target.value)
  }

  return (
    <div className={className}>
      <input
        onChange={handleChange}
        placeholder="Search GitHub username…"
        spellCheck="false"
        type="text"
        value={inputName}
      />
      {error && <ErrorMessage />}
    </div>
  )
}

const InputContainer = styled(UnstyledInputContainer)`
  display: inline-block;
  position: relative;
`

const UnstyledSearchBar = ({ className, clearError, error, setName }) => {
  const [inputName, setInputName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputName) setName(inputName)
  }

  return (
    <form className={className} onSubmit={handleSubmit} >
      <SearchIcon>
        <img src={IconSearch} alt="Search" />
      </SearchIcon>
      <InputContainer
        clearError={clearError}
        error={error}
        inputName={inputName}
        setInputName={setInputName}
      />
      <button>Search</button>
    </form >
  )
}

const SearchIcon = styled.div`
  padding-left: 1.6rem;

  @media (min-width: 768px) {
    padding-left: 3.2rem;
  }
`

const SearchBar = styled(UnstyledSearchBar)`
  align-items: center;
  background: ${props => props.theme.colors.searchBg};
  box-shadow: ${props => props.theme.name === 'light' ? '0 1.6rem 3rem -0.1rem rgba(70, 96, 187, 0.2)' : 'none'};
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  position: relative;

  button {
    background: ${props => props.theme.colors.searchBtnBg};
    border: none;
    border-radius: 1rem;
    color: ${props => props.theme.colors.searchBtnText};
    cursor: pointer;
    font-family: ${props => props.theme.font};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.12rem;
    line-height: 2.1rem;
    margin: 0.7rem;
    padding: 1.25rem 1.4rem 1.25rem 1.8rem;

    ${({ error, isLoading, theme }) => (error || isLoading) && `
      background: ${theme.colors.searchBtnBgActive};
    `}

    :hover {
      background: ${props => props.theme.colors.searchBtnBgActive};
    }

    @media (min-width: 768px) {
      font-size: 1.6rem;
      letter-spacing: 0.01rem;
      line-height: 2.4rem;
      margin: .95rem 1rem;
      padding: 1.3rem 2.35rem;
    }
  }

  img {
    height: 2rem;
    width: 2rem;

    @media (min-width: 768px) {
        height: 2.4rem;
        width: 2.4rem;
    }
  }

  input {
    background: ${props => props.theme.colors.searchBg};
    border: none;
    caret-color: ${props => props.theme.colors.searchCaret};
    color: ${props => props.theme.colors.searchText};
    cursor: pointer;
    font-family: ${props => props.theme.font};
    font-size: 1.3rem;
    line-height: 2.5rem;
    margin-left: 0;
    outline: none;
    padding-left: 0.7rem;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 1.8rem;
      padding-left: 2rem;
    }

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

export default SearchBar
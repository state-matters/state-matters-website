import React from "react"
import styled from "styled-components"
import Input from "./Input"

const SearchBarWrapper = styled.label`
  display: block;
  position: relative;
  input {
    width: 100%;
    display: block;
  }
`

const SearchBar = ({ type = "text", placeholder = "Search", ...props }) => (
  <SearchBarWrapper {...props}>
    <Input placeholder={placeholder} />
  </SearchBarWrapper>
)

export default SearchBar

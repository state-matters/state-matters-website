import React from "react"
import styled from "styled-components"

import Logo from "../assets/sm_logo.svg"
import SearchBar from "./SearchBar"

const Wrapper = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.baseSize}px;
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoints.xLg}px;
  margin: 0 auto;
  height: ${({ theme }) => theme.baseSize * 5}px;
  align-items: center;
  z-index: 10;
  img {
    width: 100%;
    max-width: ${({ theme }) => theme.baseSize * 5}px;
    margin-right: auto;
  }
  .search-bar {
    width: ${({ theme }) => theme.breakPoints.sm}px;
    margin-left: ${({ theme }) => theme.baseSize}px;
  }
`

const Header = props => (
  <Wrapper>
    <img src={Logo} alt="State Matters Logo" />
    <SearchBar
      className="search-bar"
      placeholder="Search for bills or articles"
    />
  </Wrapper>
)

export default Header

import React from "react"
import styled from "styled-components"

// import Logo from "../assets/sm_logo.svg"
import SearchBar from "./SearchBar"

const StyledHeader = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoints.xLg};
  margin: 0 auto;
  height: 10rem;
  align-items: center;
  z-index: 10;
  img {
    width: 100%;
    max-width: 10rem;
    margin-right: auto;
  }
  .search-bar {
    width: ${({ theme }) => theme.breakPoints.sm};
    margin-left: 2rem;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 3rem;
    width: 3rem;
    height: 4rem;
    span {
      display: block;
      margin-bottom: 0.5rem;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.ui.light};
    }
    span:nth-of-type(2) {
      width: 80%;
    }
    span:nth-of-type(3) {
      width: 50%;
    }
  }
`

const Header = props => (
  <StyledHeader>
    <img src="./assets/sm_logo.svg" alt="State Matters Logo" />
    <button className="btn primary donate">Donate</button>
    <span className="nav-menu">
      <span />
      <span />
      <span />
    </span>
  </StyledHeader>
)

export default Header

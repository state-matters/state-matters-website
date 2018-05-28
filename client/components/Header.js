import React from "react"
import styled from "styled-components"
import { Button } from "components/TouchTarget"
import theme from "theme"

// import Logo from "../assets/sm_logo.svg"
import SearchBar from "./SearchBar"

const StyledHeader = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  height: 10rem;
  align-items: center;
  z-index: 10;
  img {
    width: 100%;
    max-width: 10rem;
    margin-right: auto;
  }
  .search-bar {
    width: ${theme.breakPoints.sm};
    margin-left: 2rem;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 3rem;
    width: 2rem;
    height: 2rem;
    span {
      display: block;
      margin-bottom: 0.5rem;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.grey["100"]};
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
  <StyledHeader className="container">
    <img src="./assets/SM-logo.svg" alt="State Matters Logo" />
    <Button className="primary donate">Donate</Button>
    <span className="nav-menu">
      <span />
      <span />
      <span />
    </span>
  </StyledHeader>
)

export default Header

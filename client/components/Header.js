import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
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
  .logo-link {
    margin-right: auto;
    max-width: 10rem;
  }
  .logo-link img {
    width: 100%;
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
    <Link to="/" className="logo-link">
      <img src="/assets/SM-logo.svg" alt="State Matters Logo" />
    </Link>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <input type="hidden" name="hosted_button_id" defaultValue="7TN8BEBTJMZXQ" />
  <Button type="submit" name="submit" defaultValue="Donate." className="primary donate" >Donate </Button>
</form>
    <span className="nav-menu">
      <span />
      <span />
      <span />
    </span>
  </StyledHeader>
)

export default Header

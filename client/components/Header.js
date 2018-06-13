import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from "components/TouchTarget"
import { Grid, Column } from "components/Grid"
import theme from "theme"

const StyledHeader = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  height: 10rem;
  align-items: center;
  background-color: ${({ open }) =>
    open ? theme.colors.grey["900"] : "transparent"};
  z-index: 10;
  .logo-link {
    margin-right: auto;
    max-width: 10rem;
  }
  .logo-link img {
    width: 100%;
  }
  .nav-menu {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    background-color: ${theme.colors.grey["900"]};
    color: ${theme.colors.grey["100"]};
    transform: translateY(${({ open }) => (open ? "0" : "-100%")});
    transition: 200ms;
    min-height: 75vh;
    width: 100%;
    z-index: 8;
  }
  .nav-menu__button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 3rem;
    width: 2rem;
    height: 2rem;
    z-index: 9;
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
  .nav-menu__screen {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.grey["900"]};
    opacity: ${({ open }) => (open ? 0.6 : 0)};
    transition: 200ms;
    transition-delay: 100ms;
    z-index: 7;
  }
`

const DonateButton = () => (
  <form
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
    target="_top"
  >
    <input type="hidden" name="cmd" defaultValue="_s-xclick" />
    <input type="hidden" name="hosted_button_id" defaultValue="7TN8BEBTJMZXQ" />
    <Button
      type="submit"
      name="submit"
      defaultValue="Donate."
      className="primary donate"
    >
      Donate
    </Button>
  </form>
)

class Header extends React.Component {
  state = { open: false }
  toggleMenu = () => {
    console.log("toggle")
    this.setState(state => ({ open: !state.open }))
  }
  render = () => {
    return (
      <StyledHeader className="container" open={this.state.open}>
        <Link to="/" className="logo-link">
          <img src="/assets/SM-logo.svg" alt="State Matters Logo" />
        </Link>
        {!this.state.open && <DonateButton />}
        <span className="nav-menu__button" onClick={this.toggleMenu}>
          <span />
          <span />
          <span />
        </span>
        <div className="nav-menu__screen" />
        <div className="nav-menu">
          <Grid container>
            <Column sm={12}>
              <h3>Statematters.org</h3>
              <h4>Chicago, IL</h4>
            </Column>
            <Column sm={3}>
              <ul>
                <li>
                  <h2>About</h2>
                </li>
                <li>
                  <h2>The Team</h2>
                </li>
                <li>
                  <h2>Careers</h2>
                </li>
                <li>
                  <h2>Submit</h2>
                </li>
              </ul>
            </Column>
            <Column sm={4}>list two</Column>
            <Column sm={5}>list three</Column>
          </Grid>
        </div>
      </StyledHeader>
    )
  }
}

export default Header

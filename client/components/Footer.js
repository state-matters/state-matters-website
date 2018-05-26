import React from "react"
import styled from "styled-components"
import {Grid, Column} from "components/Grid"

// import Logo from "../assets/sm_logo.svg"
import SearchBar from "./SearchBar"

const FooterWrapper = styled(Grid)`
	background-color: #342C5F;
  width: 100%;
  display:inline-flex;
  color:white;
  `

const StyledFooterNav = styled(Grid)`
	background-color: #272727;
  width: 40%;
  color:white;
  `

const StyledFooter = styled(Grid)`
	background-color: #342C5F;
  width:60%;
  color:white;
  `


const Footer = props => (
  <footer>
    <FooterWrapper>
    <StyledFooterNav>
      <Column mdOffset={1} md={5}>
      <h3> StateMatters.org </h3>
      <h4> Chicago, IL </h4>
      <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Submit</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
      </ul>
      </Column>
    </StyledFooterNav>
    <StyledFooter>
      <Column mdOffset={1} md={6}>
        <h3> Let's work together to understand state government</h3>
          <ul>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Subsribe</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </Column>
    </StyledFooter>
        </FooterWrapper>
  </footer>
)

export default Footer

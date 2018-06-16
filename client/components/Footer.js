import React from "react"
import styled from "styled-components"
import theme from "theme"
import { BlockLink } from "components/TouchTarget"
import { Link } from "components/TouchTarget"
import { Button } from "components/TouchTarget"
import Input from "components/Input"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  color: ${theme.colors.grey["300"]};
  min-height: 50rem;
  .left {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${theme.colors.grey["900"]};
    @media (min-width: ${theme.breakPoints.md}) {
      display: flex;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${theme.colors.tertiary["500"]};
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${theme.colors.grey["700"]};
    li {
      margin-top: 2rem;
    }
  }
  @media (min-width: ${theme.breakPoints.md}) {
    grid-template-columns: 40% 1fr;
  }

`

const FooterLink = Link.extend`
  color: ${theme.colors.grey["700"]};
  font-family: "Martel", serif;
  font-size: 3rem;
  font-weight: 300;
  &:hover {
    color: ${theme.colors.primary["500"]};
  }
`;

const DonateButton = Button.extend`
border: none;
text: none;

`;

// const FormLink = BlockLink.withComponent('form')
//
// const DonateLink = FormLink.extend`
// input[type="submit"] {
//   color: ${theme.colors.grey["700"]};
//   font-family: "Martel", serif;
//   font-size: 3rem;
//   font-weight: 300;
//   &:hover {
//     color: ${theme.colors.primary["500"]};
//   }
// }
//
// `;

const DonateForm = props => (
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" defaultValue="_s-xclick" />
    <input type="hidden" name="hosted_button_id" defaultValue="7TN8BEBTJMZXQ" />
    <DonateButton type="submit" name="submit" defaultValue="Donate." className="donate" ></DonateButton>
  </form>
)

export default () => (
  <StyledFooter>
    <div className="left">
      <div className="content">

          <FooterLink to="/">StateMatters.org</FooterLink>

        <h4>Chicago, IL</h4>
        <ul>
          <li>
          <FooterLink to="/about">About</FooterLink>


          </li>
          {/*
            <li>
            <h3>Submit</h3>
          </li>
          <li>
            <h3>Careers</h3>
          </li>
          */
          }
          <li>
          <FooterLink to="/articles">Articles</FooterLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="right">
      <div className="content">
        <h2>Let’s work together</h2>
        <h3>to understand state government</h3>
        <ul>
          <li>
          <BlockLink><DonateForm />Donate</BlockLink>

          </li>
          <li>
            <BlockLink to="/subscribe">Subscribe to Our Newsletter</BlockLink>
          </li>
          <li>
            <BlockLink to="/about">Contact Us</BlockLink>
          </li>
        </ul>
      </div>
    </div>
  </StyledFooter>
)

import React from "react"
import styled from "styled-components"
import theme from "theme"
import { BlockLink, Link } from "components/TouchTarget"
import SubcriptionModal from "components/SubscriptionModal"
import Donate from "components/Donate"

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
  .social-icons {
    display: flex;
    margin-top: 2rem;
    li:not(:last-of-type) {
      margin-right: 2rem;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: ${theme.colors.grey["900"]};
    }
    a {
      color: ${theme.colors.grey["100"]};
    }
    .mdi {
      font-size: 2rem;
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
`

export default class Footer extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.form.submit()
  }
  render = () => {
    return (
      <StyledFooter>
        <div className="left">
          <div className="content">
            <FooterLink to="/">StateMatters.org</FooterLink>

            <h4>Chicago, IL</h4>
            <ul>
              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>
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
                <Donate>
                  {props => (
                    <BlockLink {...props} className="primary">
                      Donate
                    </BlockLink>
                  )}
                </Donate>
              </li>
              <li>
                <SubcriptionModal color="white" />
              </li>
              <li>
                <BlockLink href="mailto:info@statematters.org">
                  Contact Us
                </BlockLink>
              </li>
            </ul>
            <ul className="social-icons">
              <li className="icon">
                <a href="https://twitter.com/state_matters">
                  <span className="mdi mdi-twitter" />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.instagram.com/statematters/">
                  <span className="mdi mdi-instagram" />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.facebook.com/statematters/">
                  <span className="mdi mdi-facebook" />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.youtube.com/channel/UCrYUXeENK2eSIVT1o7036Ig">
                  <span className="mdi mdi-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </StyledFooter>
    )
  }
}

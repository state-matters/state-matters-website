import React from "react"
import styled from "styled-components"
import theme from "theme"
import { BlockLink } from "components/TouchTarget"

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

export default () => (
  <StyledFooter>
    <div className="left">
      <div className="content">
        <a href="/"><h2>StateMatters.org</h2></a>

        <h4>Chicago, IL</h4>
        <ul>
          <li>
             <a href="/about"><h3>About</h3></a>
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
            <a href="/articles"><h3>Articles</h3></a>
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
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input type="hidden" name="hosted_button_id" defaultValue="7TN8BEBTJMZXQ" />
            <input type="submit" name="submit" defaultValue="Donate." />
          </form>
            <BlockLink to="http://paypal.com/">donate</BlockLink>
          </li>
          <li>
            <BlockLink to="/subscribe">subscribe to our newsletter</BlockLink>
          </li>
          <li>
            <BlockLink to="/about">contact us</BlockLink>
          </li>
        </ul>
      </div>
    </div>
  </StyledFooter>
)

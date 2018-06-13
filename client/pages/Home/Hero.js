import React from "react"
import styled from "styled-components"
import { BlockLink } from "components/TouchTarget"
import theme from "theme"
import { Grid, Column } from "components/Grid"

const Wrapper = styled.section`
  position: relative;
  padding-top: 15rem;
  padding-bottom: 2rem;
  background-color: ${theme.colors.grey["900"]}};
  color: ${theme.colors.grey["100"]};
  .grid {
    height: 100%;
    align-items: center;
  }
  .hero {
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
  }
  .hero__link {
    margin-top: 2rem;
  }
  &:after {
    display: none;
    content: "";
    position: absolute;
    top: 48%;
    right: 0;
    border-radius: 50%;
    background-color: ${theme.colors.primary["100"]};
    height: 50rem;
    width: 50rem;
    transform: translateX(36%);
    @media (min-width: 60rem) {
      display: initial;
    }
  }
  @media (min-width: 40rem) {
    padding-top: 0;
    padding-bottom: 0;
    height: calc(100vh - 3rem);
    max-height: 50rem;
  }
`

export default props => {
  return (
    <Wrapper>
      <Grid container>
        <Column md={7} mdOffset={1}>
          <h1 className="hero">
            We create video content and briefs on the most pressing political
            issues & laws that affect you.
          </h1>
          <BlockLink className="hero__link" to="/about">
            Learn more about us
          </BlockLink>
        </Column>
      </Grid>
    </Wrapper>
  )
}

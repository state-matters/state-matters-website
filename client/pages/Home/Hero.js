import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ChevronRight } from "react-feather"
import { Grid, Column } from "components/Grid"

const Wrapper = styled.section`
  position: relative;
  padding-top: 15rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.ui.dark};
  color: ${({ theme }) => theme.colors.ui.light};
  z-index: -1;
  .grid {
    height: 100%;
    align-items: center;
  }
  &:after {
    display: none;
    content: "";
    position: absolute;
    top: 48%;
    right: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.ui.semiLight};
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
        <Column md={8} mdOffset={1}>
          <h2>
            We create video content and briefs on the most pressing political
            issues & laws that affect you.
          </h2>
          <Link to="/about">Learn more about us</Link>
        </Column>
      </Grid>
    </Wrapper>
  )
}

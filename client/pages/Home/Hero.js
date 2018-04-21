import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ChevronRight } from "react-feather"
import { Grid, Column } from "components/Grid"

const Wrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.ui.dark};
  color: ${({ theme }) => theme.colors.ui.light};
  height: calc(100vh - 3rem);
  max-height: 50rem;
  z-index: -1;
  .grid {
    height: 100%;
    align-items: center;
  }
  &:after {
    content: "";
    position: absolute;
    top: 48%;
    right: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.ui.semiLight};
    height: 50rem;
    width: 50rem;
    transform: translateX(36%);
  }
  }
`

export default props => {
  return (
    <Wrapper>
      <Grid container>
        <Column span={8} offset={1}>
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

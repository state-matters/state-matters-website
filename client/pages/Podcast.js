import React, { Fragment } from "react"
import styled from "styled-components"
import { Grid, Column } from "components/Grid"
import theme from "theme"

export default props => {
  return (
    <Fragment>
      <Main container>
        <Column sm={12}>
          <HeaderImg src={null} alt="header img alt text" />
        </Column>
        <Column sm={12}>
          <Title>Ilinformed</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit minus
            mollitia ut fugiat libero fugit eveniet rerum deserunt beatae laborum, non voluptates,
            quas, est cumque sunt assumenda! Molestias, pariatur?
          </Description>
        </Column>
        <BannerImg src={null} sm={0} md={2} />
        <AnchorWrapper sm={12} md={8}>
          <h2>AnchorFM wrapper</h2>
        </AnchorWrapper>
        <BannerImg src={null} sm={0} md={2} />
      </Main>
      <Links>
        <Grid container>
          <Column sm={12}>
            <h2>Listen</h2>
            <LinksList>
              <Item>
                <a href="">Apple Music</a>
              </Item>
              <Item>
                <a href="">Google Play</a>
              </Item>
              <Item>
                <a href="">Spotify</a>
              </Item>
              <Item>
                <a href="">Overcast</a>
              </Item>
              <Item>
                <a href="">Pocket Casts</a>
              </Item>
              <Item>
                <a href="">Stitcher</a>
              </Item>
              <Item>
                <a href="">RadioPublic</a>
              </Item>
              <Item>
                <a href="">Anchor</a>
              </Item>
              <Item>
                <a href="">RSS Feed</a>
              </Item>
            </LinksList>
          </Column>
        </Grid>
      </Links>
    </Fragment>
  )
}

const Main = styled(Grid)`
  min-height: calc(100vh - 8rem);
  margin-top: 8rem;
  padding: 2rem;
`

const HeaderImg = styled.img`
  display: block;
  min-height: 30rem;
  background: ${theme.colors.grey["300"]};
`

const Title = styled.h1``

const Description = styled.p``

const BannerImg = styled(Column)`
  background: ${theme.colors.grey["300"]};
`

const AnchorWrapper = styled(Column)``

const Links = styled.section`
  padding: 4rem 0 8rem;
  background: ${theme.colors.grey["900"]};
  h2 {
    margin-bottom: 2rem;
  }
`

const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  color: ${theme.colors.grey["100"]};
  list-style: none;
`

const Item = styled.li`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`

import React, { Fragment } from "react"
import styled from "styled-components"
import { Grid, Column } from "components/Grid"
import theme from "theme"

export default props => {
  return (
    <Fragment>
      <HeaderImg src="/assets/podcast/header.jpg" alt="header img alt text" />
      <Main container>
        <BannerImg src="/assets/podcast/banner_left.jpg" sm={0} md={2} />
        <AnchorWrapper sm={12} md={8}>
          <Title>IL Informed</Title>
          <Description>
            Poet, activist and researcher Glenance Green and failed gubernatorial candidate/former
            state legislator Daniel Biss, come together to talk Illinois politics, government and
            how the heck it all works (or doesn’t) in Springfield. From the games that are played
            just to get bills passed, the role of lobbyists, private plane pension payments and more
            — Glenance and Daniel will be pulling back the curtain and shining some light.
          </Description>
          <iframe src="https://anchor.fm/il-informed/embed" frameborder="0" scrolling="no" />
        </AnchorWrapper>
        <BannerImg src="/assets/podcast/banner_right.jpg" sm={0} md={2} />
      </Main>
      <Links>
        <Grid container>
          <Column sm={12}>
            <h2>Listen</h2>
            <LinksList>
              <Item>
                <a href="">Apple Podcasts</a>
              </Item>
              <Item>
                <a href="">Spotify</a>
              </Item>
              <Item>
                <a href="">Google Podcasts</a>
              </Item>
              <Item>
                <a href="">Stitcher</a>
              </Item>
              <Item>
                <a href="">Breaker</a>
              </Item>
              <Item>
                <a href="">Castbox</a>
              </Item>
              <Item>
                <a href="">Overcast</a>
              </Item>
              <Item>
                <a href="">Pocket Casts</a>
              </Item>
              <Item>
                <a href="">RadioPublic</a>
              </Item>
              <Item>Basically anywhere...</Item>
            </LinksList>
          </Column>
        </Grid>
      </Links>
    </Fragment>
  )
}

const Main = styled(Grid)`
  padding: 6rem 2rem;
`

const HeaderImg = styled.img`
  display: block;
  height: 30rem;
  width: 100%;
  object-fit: cover;
  margin-top: 7.5rem;
  background: ${theme.colors.grey["300"]};
  border-bottom: 4px solid ${theme.colors.primary["500"]};
`

const Title = styled.h1``

const Description = styled.p``

const BannerImg = styled(Column)`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  border: 4px solid ${theme.colors.primary["500"]};
`

const AnchorWrapper = styled(Column)`
  iframe {
    margin-top: 4rem;
    width: 100%;
  }
`

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

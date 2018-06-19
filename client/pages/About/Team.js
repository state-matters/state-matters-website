import React from "react"
import styled from "styled-components"
import axios from "axios"
import theme from "theme"
import { Grid, Column } from "components/Grid"

const StyledTeam = styled.section`
  min-height: 100vh;
  .team__hero {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  .team__hero,
  .team__leadership,
  .team__normies {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .team__hero {
    background-color: ${theme.colors.primary["500"]};
    color: ${theme.colors.grey["100"]};
    height: 50rem;
  }
  .team__leadership {
    margin-top: -20rem;
  }
  .leadership__card {
    background-color: grey;
    .profile-photo {
      background: 
      height: 38.5rem;
    }
  }
  .normies__card {
    padding: 6.5rem 3.5rem 3.5rem;
    background-color: ${theme.colors.primary["100"]};
    h3 {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media (min-width: ${theme.breakPoints.md}) {
    .team__hero {
      padding-top: 20rem;
      padding-bottom: 20rem;
    }
    .team__hero,
    .team__leadership,
    .team__normies {
      padding-left: 0;
      padding-right: 0;
    }
  }
`

const LeadershipCard = styled(Column)`
  position: relative;
  background-color: grey;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 38.5rem;
  &:hover:before,
  &:hover:after {
    opacity: 0;
  }
  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 200ms;
  }
  &:before {
    background-color: rgb(255, 255, 255);
    mix-blend-mode: darken;
  }
  &:after {
    background-color: rgba(243, 126, 90, 0.9);
    mix-blend-mode: lighten;
  }
`

export default class extends React.Component {
  state = { team: [], loaded: false }
  componentDidMount = async () => {
    const { data } = await axios("/api/team")
    this.setState({ team: data, loaded: true })
  }
  render = () => {
    const { team, loaded } = this.state
    if (!loaded) return <div>...loading</div>
    return (
      <StyledTeam>
        <div className="team__hero">
          <Grid container>
            <Column>
              <h1>The Team</h1>
            </Column>
          </Grid>
        </div>
        <Grid container className="team__leadership">
          <Column sm={12}>
            <h2>Leadership</h2>
          </Column>
          {team.filter(m => m.fields.leader).map(m => (
            <LeadershipCard
              key={m.name}
              lg={4}
              md={6}
              sm={12}
              photo={m.fields.photo.fields.file.url}
            >
              {m.name}
            </LeadershipCard>
          ))}
        </Grid>
        <Grid container className="team__normies">
          <Column sm={12}>
            <h2>Normies</h2>
          </Column>
          {team.filter(m => !m.fields.leader).map(m => (
            <Column key={m.name} md={3} sm={4} className="normies__card">
              <h3>{m.fields.name}</h3>
              <p>{m.fields.title}</p>
            </Column>
          ))}
        </Grid>
      </StyledTeam>
    )
  }
}

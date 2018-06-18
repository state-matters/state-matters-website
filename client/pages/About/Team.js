import React from "react"
import styled from "styled-components"
import theme from "theme"
import { Grid, Column } from "components/Grid"

const StyledTeam = styled.section`
  min-height: 100vh;
  .team__hero {
    padding: 10rem 1rem;
    background-color: ${theme.colors.primary["500"]};
    color: ${theme.colors.grey["100"]};
    height: 50rem;
  }
  .team__leadership {
    margin-top: -20rem;
  }
  .leadership__card {
    background-color: grey;
  }
  @media (min-width: ${theme.breakPoints.sm}) {
    .team__hero {
      padding: 20rem 0;
    }
  }
`

const team = [
  {
    leader: true,
    name: "Kacie Smith",
    title: "Executive Director / Board Member"
  },
  { leader: true, name: "Devin", title: "Executive Director / Board Member" },
  { leader: false, name: "Chris", title: "Executive Director / Board Member" },
  { leader: true, name: "Quinn", title: "Executive Director / Board Member" },
  { leader: false, name: "Steph", title: "Executive Director / Board Member" }
]

export default props => {
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
        {team.filter(m => m.leader).map(m => (
          <Column key={m.name} md={4} sm={6} className="leadership__card">
            {m.name}
          </Column>
        ))}
      </Grid>
      <Grid container className="team__normies">
        <Column sm={12}>
          <h2>Normies</h2>
        </Column>
        {team.filter(m => !m.leader).map(m => (
          <Column key={m.name} md={4} sm={6} className="normies__card">
            {m.name}
          </Column>
        ))}
      </Grid>
    </StyledTeam>
  )
}

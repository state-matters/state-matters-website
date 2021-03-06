import React from "react"
import styled from "styled-components"
import theme from "theme"
import { Grid, Column } from "components/Grid"
import { BlockLink } from "components/TouchTarget"

const StyledAbout = styled.div`
  position: relative;
  min-height: 100vh;
  .small {
    padding-bottom: 2rem;
    color: ${theme.colors.grey["700"]};
  }
  .about__hero {
    padding: 10rem 1rem 5rem;
    background-color: ${theme.colors.grey["300"]};
    p {
      margin-top: 2rem;
    }
  }
  .about__what-we-do {
    padding: 10rem 1rem 5rem;
  }
  .about__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
      margin-top: 2rem;
    }
  }
  .what-we-do__copy {
    margin: 4rem 0;
    max-width: 30rem;
  }
  .team {
    margin-bottom: 40rem;
  }
  .team .container {
    padding: 10rem 0;
    background-color: ${theme.colors.primary["100"]};
    overflow: visible;
  }
  .team__copy {
    padding: 2rem;
    h3 {
      margin-top: 2rem;
    }
    p {
      margin-top: 2rem;
    }
    .team__links {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      a {
        margin-top: 2rem;
      }
    }
  }
  .team__photo-container {
    position: relative;
  }
  .team__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    transform: translateX(2rem);
  }
  .misson {
    color: ${theme.colors.grey["100"]};
    background-color: ${theme.colors.tertiary["700"]};
    padding: 10rem 0;
    text-align: center;
    h2 {
      font-size: 5rem;
    }
    p {
      margin-top: 4rem;
      line-height: 2;
    }
  }
  @media (min-width: ${theme.breakPoints.xSm}) {
    .team {
      margin-bottom: 10rem;
    }
  }
  @media (min-width: ${theme.breakPoints.md}) {
    .about__hero {
      padding: 10rem 0 5rem;
    }
    .about__what-we-do {
      padding: 10rem 0 5rem;
    }
  }
`

export default () => (
  <StyledAbout>
    <section className="about__hero">
      <Grid container>
        <Column className="about__hero" sm={7}>
          <h1>Who is State Matters?</h1>
          <h4>
            We are an eclectic group of artists, designers, developers, policy
            wonks and writers.
          </h4>
          <p>
            We founded State Matters in 2017 to make Illinois government clear
            and unintimidating. We believe that civic knowledge is the bedrock
            of a thriving democracy. As a nonpartisan educational organization,
            our agenda is to engage, educate, and inspire &mdash; regardless of
            who you are or where you’re coming from.
          </p>
          <p>
            At first, we were just looking for some basic answers about how the
            state worked (or didn’t work). But our state government is dense
            with bureaucracy and the existing online resources were either too
            biased, too superficial, or flew right over our heads. When we
            couldn’t find what we were looking for, we built it ourselves.
          </p>
        </Column>
      </Grid>
    </section>
    <section className="about__what-we-do">
      <Grid container>
        <Column sm={7}>
          <p className="small">What do we do?</p>
          <h2>We create high-quality videos that:</h2>
          <p className="what-we-do__copy">
            Explain how state and local government in Illinois operates.
          </p>
          <p className="what-we-do__copy">
            Explain the most impactful, state legislation being proposed in
            Springfield.
          </p>
          <p className="what-we-do__copy">
            Help folks engage with their legislators and elected officials.
          </p>
        </Column>
        <Column sm={5} className="about__links">
          <BlockLink color="black">See all bill videos</BlockLink>
          <BlockLink color="black">See all lesson videos</BlockLink>
        </Column>
      </Grid>
    </section>
    <section className="team">
      <Grid container>
        <Column sm={6} className="team__copy">
          <p className="small">Work with us.</p>
          <h4 className="subtitle">
            Our team is up for a challenge and we’re always adding new voices
            and perspectives to our team.
          </h4>
          <p>
            Are you an artist who wants to make a difference? We are too! Let’s
            join forces.
          </p>
          <div className="team__links">
            <BlockLink color="black">
              <a href="mailto:info@statematters.org">Contact Us</a>
            </BlockLink>
            {/*<BlockLink color="black">Meet the team</BlockLink>*/}
          </div>
        </Column>
        <Column sm={6} className="team__photo-container">
          <img
            src="./assets/Team-members-image.png"
            alt="Our Team"
            className="team__photo"
          />
        </Column>
      </Grid>
    </section>
    <section className="misson">
      <Grid container>
        <Column sm={8} smOffset={2}>
          <h2>Mission & Vision</h2>
          <p>
            We don’t want to just make government easy to understand. We also
            want to make it fun, beautiful, and enjoyable. Because that’s what
            we like. By focusing on striking and imaginative content, we appeal
            to people who want to be civically-engaged but might not have the
            time and energy to engage with in-depth journalism or unravel
            complicated legislative lingo.
          </p>
          <p>
            We are currently in the process of becoming a 501c3 nonprofit, in
            the meantime we are fiscally sponsored by the fabulous folks over at
            GoodCity.
          </p>
        </Column>
      </Grid>
    </section>
  </StyledAbout>
)

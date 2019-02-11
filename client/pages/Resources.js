import React from "react"
import styled from "styled-components"
import theme from "theme"

const links = [{ url: "", title: "", description: "" }]

export default class extends React.Component {
  render() {
    return (
      <StyledResources>
        <h1>Municipal Resources!</h1>
        <h4>
          The Chicago municipal election is on February 26th! Early voting city-wide starts February
          11th, and the “super site” downtown is already open. There are so many awesome
          organizations and media outlets putting out tons of great content. We’re collecting it all
          for you.
        </h4>
        <h4>
          This election is nonpartisan - which means this is NOT A PRIMARY, it’s the whole
          enchilada. But if no candidate gets more than 50% of the vote… the two top vote-getters
          will go to a run-off election in April.
        </h4>
        <h3
          style={{
            padding: "2rem 1rem",
            background: theme.colors.tertiary["500"],
            borderRadius: 4,
            color: theme.colors.grey["100"],
            textAlign: "center"
          }}>
          Check it out.
        </h3>
        <form
          action="https://formspree.io/outreach@statematters.org"
          className="resources__questions"
          method="POST">
          <input type="email" placeholder="Enter your email" name="_replyto" />
          <textarea
            placeholder="Ask us a question and we'll get back with ya!"
            rows="4"
            name="message"
          />
          <button type="submit">Ask us anything.</button>
        </form>
        <h2>What’s on the ballot:</h2>
        <a href="https://drive.google.com/file/d/1x0LKGjjdP9e0eZ_y8eEf7N37IZz2iV-d/view?usp=drivesdk">
          Download our beautiful poster walkthrough of the ballot
        </a>
        <div className="link-box">
          <h4>
            <a
              href="https://drive.google.com/open?id=16W0IDZY3scHR7C_x3zyvPxHChkvATYxg"
              target="_blank">
              Our Voter Education Toolkit
            </a>
          </h4>
          <p>
            Do you want to help get your friends ready to vote? Check out our toolkit for hosting
            your very own Voter Education Workshop!
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://www.ballotready.org/">
              BallotReady -See an example of your ballot That’s right, a full example!
            </a>
          </h4>
          <p>
            Just put in your address and BallotReady will give a sample ballot that you can fill out
            and bring with when you vote.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://www.statematters.org/lessons/1KrEOmlEUkWSa4kO4qAOIg">
              What are ballot measures?
            </a>
          </h4>
          <p>
            Ok, so not everyone will have ballot measures this time around, but if you do, and
            you’re wondering what they are...we laid it out for you.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://chi.vote/">
              chi.vote
            </a>
          </h4>
          <p>
            A collective of media groups got together to build this great resource to get you
            prepped for the election. You can take a quiz, explore the races, and even find your
            polling place.
          </p>
        </div>
        <h2>Learn about the candidates</h2>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://illinoissunshine.org">
              Illinois Sunshine
            </a>
          </h4>
          <p>
            Wondering where the candidates' money is coming from? Illinois Sunshine is a great tool
            to find out!
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://www.documenters.org/">
              Find a forum
            </a>
          </h4>
          <p>
            City Bureau gathered info for ALL of the forums happening with candidates (along with a
            bunch of other stuff!) Find one near you and learn what the candidates are all about up
            close in person.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://www.chicagotribune.com/news/politics/elections/ct-candidates-for-chicago-mayor-20190126-storygallery.html">
              Chicago Tribune’s About the Candidates
            </a>
          </h4>
          <p>
            Chicago Tribune gives you their ‘lil summary on the whopping 14 candidates running for
            Chicago mayor.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://interactive.wbez.org/2019/mayoral-questionnaire/">
              20 Yes or No Questions
            </a>
          </h4>
          <p>
            WBEZ asked mayoral candidates 20 yes or no questions. See how they responded and stay
            tuned until the end to see who would govern like Leslie Knope or King T’Challa.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://abc7chicago.com/politics/chicago-mayoral-election-2019-meet-the-candidates-in-the-race/5106733/">
              ABC Chicago Voter Guide
            </a>
          </h4>
          <p>
            ABC Chicago gives you their ‘lil summary on the whopping 14 candidates running for
            Chicago mayor.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://elections.suntimes.com/voting-guide/">
              Chicago Sun Times Voter Guide
            </a>
          </h4>
          <p>
            If you want to take a deep dive, Chicago Sun Times delivers the most extensive profile
            on every candidate running in the municipals. Even the aldermanic candidates!
          </p>
        </div>
        <h2>FOR THAT ACTUAL VOTING PART </h2>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://chicagoelections.com/en/your-voter-information.html">
              Find your polling place
            </a>
          </h4>
          <p>Don’t know where to go to vote? Check this out.</p>
        </div>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html">
              What Ward do I Live In?
            </a>
          </h4>
          <p>
            Your ward determines who you’ll be voting for in that aldermanic race. Do you know which
            one you’re in?
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a target="_blank" href="https://ova.elections.il.gov/">
              Check your Voter Registration
            </a>
          </h4>
          <p>Not sure if you’re registered? Check it out here.</p>
        </div>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://medium.com/state-matters/know-your-voting-rights-7f7f5a81938a">
              Know your Voting Rights
            </a>
          </h4>
          <p>
            Your voting rights are important. Make sure you know the sitch before you go to vote.
          </p>
        </div>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://medium.com/state-matters/election-myth-busting-b4c1224bd382">
              Election Myth Busting
            </a>
          </h4>
          <p>
            Voting myths tend to pop up around election time. Make sure you’re not falling into a
            myth trap this election season.
          </p>
        </div>
        <h2>OTHER STUFF WE DIG... </h2>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://www.chicagoreader.com/chicago/ArticleArchives?category=67005500">
              Back Room Deal
            </a>
          </h4>
          <p>Check out this Chicago Reader podcast for the latest on Chicago election news.</p>
        </div>
        <div className="link-box">
          <h4>
            <a
              target="_blank"
              href="https://www.wbez.org/shows/curious-city/no-conspiracy-required-the-true-origins-of-chicagos-february-elections/7bc0c663-79a9-4273-afbe-ea53df07215b">
              Why Chicago's election is in February
            </a>
          </h4>
          <p>
            Ever wonder why Chicago has elections in the middle of winter? WBEZ’s Curious City
            podcast tells you why.
          </p>
        </div>
        <h3
          style={{
            padding: "2rem 1rem",
            background: theme.colors.tertiary["500"],
            borderRadius: 4,
            color: theme.colors.grey["100"],
            textAlign: "center"
          }}>
          Go Vote!
        </h3>
      </StyledResources>
    )
  }
}

const StyledResources = styled.main`
  min-height: 100vh;
  padding: 10rem 1rem;
  max-width: 80rem;
  margin: 0 auto;
  h1,
  h3,
  h4,
  p {
    margin-top: 2rem;
  }
  h2 {
    margin-top: 6rem;
  }
  .link-box {
    padding: 2rem;
    border-radius: 4px;
    background: ${theme.colors.primary["100"]};
    margin-top: 4rem;
  }
  .resources__questions {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    input,
    textarea {
      all: unset;
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: 2px solid ${theme.colors.grey["500"]};
      border-radius: 4px;
      margin: 1rem 0;
      font-size: 1.5rem;
      padding: 1rem;
    }
    button {
      all: unset;
      background: ${theme.colors.primary["500"]};
      float: right;
      border-radius: 4px;
      padding: 1rem 2rem;
      font-family: "Poppins";
      font-weight: bold;
      text-transform: uppercase;
      align-self: flex-end;
    }
  }
`

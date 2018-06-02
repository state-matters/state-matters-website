import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { handleSubscribe } from "ducks/subscriptions"
import { Grid, Column } from "components/Grid"
import Modal from "components/Modal"

import Hero from "./Hero"
import BillList from "./BillList"
import ArticleList from "./ArticleList"
import LessonList from "./LessonList"

const AboutUs = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  text-align: center;
  .links {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: space-around;
  }
`

class Home extends React.Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      email: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubscribe(this.state.form)
  }

  render = _ => {
    return (
      <React.Fragment>
        <Hero />
        <BillList />
        <AboutUs className="how-it-works">
          <Grid container>
            <Column mdOffset={2} sm={8}>
              <h2>State government can be confusing. We've got you covered.</h2>
              <ul className="links">
                <li>Contact Us</li>
                <Modal
                  body={<h1>Modal Body</h1>}
                  render={toggle => <li onClick={toggle}>Document Children</li>}
                />
                <li>Dontate</li>
              </ul>
            </Column>
          </Grid>
        </AboutUs>
        <ArticleList />
        <LessonList />
      </React.Fragment>
    )
  }
}

export default connect(state => ({ subscriptions: state.subscriptions }), {
  handleSubscribe
})(Home)

import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Helmet from "react-helmet"

import { handleSubscribe } from "ducks/subscriptions"
import SubscriptionForm from "components/SubscriptionForm"
import Text from "components/Text"

import ArticleList from "./ArticleList"
import BillList from "./BillList"
import Hero from "./Hero"

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
    console.log(this.state.form)
    this.props.handleSubscribe(this.state.form)
  }

  render = _ => {
    return (
      <React.Fragment>
        <Helmet title="State Matters | Track your state government" />
        <Hero />
        <BillList />
        <ArticleList />
      </React.Fragment>
    )
  }
}

export default connect(state => ({ subscriptions: state.subscriptions }), {
  handleSubscribe
})(Home)

import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Helmet from "react-helmet"

import { handleSubscribe } from "../../ducks/subscriptions"

import SubscriptionForm from "../../components/SubscriptionForm"
import Text from "../../components/Text"
import ArticleList from "../Articles/ArticleList"
import BillList from "../Bills/BillList"

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.ui.dark};
  height: calc(100vh - 3rem);
  max-height: ${({ theme }) => theme.breakPoints.xSm};
  z-index: -1;
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

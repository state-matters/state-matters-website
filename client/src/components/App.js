import React, { Component, Fragment } from "react"
import { Route, Switch } from "react-router-dom"
// import remark from "remark"
// import reactRenderer from "remark-react"

import Header from "./Header"
import Home from "./Home"
import Bill from "./Bill"
import Game from "./Game"
import FourOhFour from "./404.js"

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount = _ => {
    fetch("/api/bills")
      .then(res => res.json())
      .then(data => this.setState({ posts: data.items }))
      .catch(err => console.warn(err))
  }

  render = _ => {
    return (
      <Fragment>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/bills/:bill_id" component={Bill} />
            <Route path="/game" component={Game} />
            <Route exact path="/" component={Home} />
            <Route component={FourOhFour} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default App

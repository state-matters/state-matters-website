import React, { Component, Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import Bill from "./Bill"
import Game from "./Game"
import NotFound from "./404.js"

class App extends Component {
  state = {
    posts: []
  }

  render = _ => {
    return (
      <Fragment>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/bills/:bill_id" component={Bill} />
            <Route path="/bill-intro" component={Game} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default App

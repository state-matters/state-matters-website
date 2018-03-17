import React, { Component, Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Bill from "./pages/Bills"
import Game from "./pages/BillIntro"
import NotFound from "./components/NotFound"

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

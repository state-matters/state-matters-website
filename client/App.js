import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Bill from "./pages/Bills"
import Game from "./pages/BillIntro"
import NotFound from "./components/NotFound"

export default props => (
  <Fragment>
    <Header />
    <main>
      <Switch>
        <Route path="/bills/:bill_id" component={Bill} />
        <Route path="/bill-intro" component={Game} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </Fragment>
)

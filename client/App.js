import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Bill from "./pages/Bills"
import Game from "./pages/BillIntro"
import NotFound from "./components/NotFound"


export default props => (
  <Fragment>
    <Header />
    <main>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/bills/:bill_id" component={Bill} />
        <Route path="/bill-intro" component={Game} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </Fragment>
)

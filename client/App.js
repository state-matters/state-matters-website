import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "components/Header"
import Footer from "components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Bill from "./pages/Bills"
import Articles from "./pages/Articles/index"
import ArticleShow from "./pages/Articles/Show"
import Lesson from "./pages/Lessons"
import Game from "./pages/BillIntro"
import NotFound from "components/NotFound"

export default props => (
  <Fragment>
    <Header />
    <main style={{ paddingTop: "1px" }}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/bills/:bill_id" component={Bill} />
        <Route path="/articles/:article_id" component={ArticleShow} />
        <Route path="/articles" component={Articles} />
        <Route path="/lessons/:lesson_id" component={Lesson} />
        <Route path="/bill-intro" component={Game} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </Fragment>
)

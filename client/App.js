import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "components/Header"
import Footer from "components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/About/Team"
import Bill from "./pages/Bills"
import Articles from "./pages/Articles/index"
import ArticleShow from "./pages/Articles/Show"
import Lesson from "./pages/Lessons"
import LessonList from "./pages/Home/LessonList"
import Game from "./pages/BillIntro"
import Resources from "./pages/Resources"
import Podcast from "./pages/Podcast"
import NotFound from "components/NotFound"

export default () => (
  <Fragment>
    <Header />
    <main style={{ paddingTop: "1px" }}>
      <Switch>
        <Route path="/bills/:bill_id" component={Bill} />
        <Route path="/articles/:article_id" component={ArticleShow} />
        <Route path="/articles" component={Articles} />
        <Route path="/lessons/:lesson_id" component={Lesson} />
        <Route path="/lessons" component={LessonList} />
        <Route path="/bill-intro" component={Game} />
        <Route path="/chicago" component={Resources} />
        <Route path="/ilinformed" component={Podcast} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </Fragment>
)

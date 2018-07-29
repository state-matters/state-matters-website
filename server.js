require("dotenv").config()

import http from "http"
import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import { createClient } from "contentful"
import api from "./api"

import React from "react"
import { ServerStyleSheet } from "styled-components"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import reducer from "ducks"
import ScrollToTop from "components/ScrollToTop"
import html from "./html"
import App from "./client/App"

const app = express()
const port = process.env.PORT || 8080

const config =
  process.env.NODE_ENV === "production"
    ? {
        space: "021ulla0m5co",
        accessToken: process.env.PROD_API_KEY
      }
    : {
        space: "021ulla0m5co",
        accessToken: process.env.DEV_API_KEY,
        host: "preview.contentful.com"
      }

export const contentfulClient = createClient(config)

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("public"))
app.use("/api", api)

// Whenever we decide what we're doing with the ballot party site, we'll need to
// redirect to it from here.
// app.get("/ballotparty", ({ response }) => {
//   response.redirect(301, "https://ballotparty.statematters.org")
// })

app.get("*", (req, res) => {
  const title = "State Matters | Track your state Government"
  const sheet = new ServerStyleSheet()
  const store = createStore(reducer, applyMiddleware(thunk))
  const body = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </StaticRouter>
      </Provider>
    )
  )
  const styles = sheet.getStyleTags()
  res.send(html({ title, styles, body }))
})

const server = http.createServer(app)

server.listen(port, "0.0.0.0")

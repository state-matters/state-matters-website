require("dotenv").config()
const { join } = require("path")
const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const logger = require("morgan")
const helmet = require("helmet")

const app = express()
const api = require("./api")
const port = process.env.PORT || 8080

if (process.env.NODE_ENV !== "production") app.use(logger("dev"))
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(join(__dirname, "public")))
app.use("/api", api)

// Whenever we decide what we're doing with the ballot party site, we'll need to
// redirect to it from here.
// app.get("/ballotparty", ({ response }) => {
//   response.redirect(301, "https://ballotparty.statematters.org")
// })

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"))
  })
}

const server = http.createServer(app)

server.listen(port)

if (process.env.NODE_ENV !== "production") {
  console.log("Serving from: " + port)
}

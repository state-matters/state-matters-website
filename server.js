const { join } = require("path")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const logger = require("morgan")

const index = require("./api/index")

app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(join(__dirname, "public")))

var port = process.env.PORT || 8080

var router = express.Router()

app.use("/api", index)

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"))
  })
}

app.listen(port)
console.log("Magic happens on port " + port)

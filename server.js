var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var logger = require("morgan")

const index = require("./api/index")

app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"))
}

app.use("/api", index)

app.listen(port)
console.log("Magic happens on port " + port)

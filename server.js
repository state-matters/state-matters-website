var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var logger = require("morgan")

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

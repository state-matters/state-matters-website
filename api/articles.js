const router = require("express").Router()
const axios = require("axios")

router.route("/").get((req, res, next) => {
  res.json({ articles: ["hi", "there"] })
})

module.exports = router

const router = require("express").Router()

const bills = require("./bills")
const subscriptions = require("./subscriptions")
const articles = require("./articles")
const lessons = require("./lessons")
const team = require("./team")

router.use("/bills", bills)
router.use("/articles", articles)
router.use("/subscriptions", subscriptions)
router.use("/lessons", lessons)
router.use("/team", team)

module.exports = router

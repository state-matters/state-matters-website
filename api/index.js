const router = require("express").Router()

const bills = require("./bills")
const subscriptions = require("./subscriptions")
const articles = require("./articles")
const lessons = require("./lessons")

router.use("/bills", bills)
router.use("/articles", articles)
router.use("/subscriptions", subscriptions)
router.use("/lessons", lessons)

module.exports = router

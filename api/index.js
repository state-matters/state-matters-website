const router = require("express").Router()

const bills = require("./bills")
const subscriptions = require("./subscriptions")
const articles = require("./articles")

router.use("/bills", bills)
router.use("/articles", articles)
router.use("/subscriptions", subscriptions)

module.exports = router

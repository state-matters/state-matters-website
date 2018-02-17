const router = require("express").Router()

const bills = require("./bills")
const subscriptions = require("./subscriptions")

router.use("/bills", bills)
router.use("/subscriptions", subscriptions)

module.exports = router

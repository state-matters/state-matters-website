const router = require("express").Router()
const axios = require("axios")

const BASE_URL = "https://cdn.contentful.com"
const SPACE_ID = "u9mwf84q9g1x"
const ACCESS_TOKEN =
  "0940c4afb72c8a4fbb49a938f3ea591c201cb65c47d611f5c91454569f7777c0"

router.route("/").get(async (req, res, next) => {
  const url = `${BASE_URL}/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=2wKn6yEnZewu2SCCkus4as`
  try {
    const response = await axios.get(url)
    res.json(response.data)
  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

module.exports = router

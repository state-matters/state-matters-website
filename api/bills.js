const router = require("express").Router()
const axios = require("axios")

const BASE_URL = "https://cdn.contentful.com"
const SPACE_ID = "021ulla0m5co"
const ACCESS_TOKEN =
  "6bd6e5edf50206eb6e65f7a6feb5959b38facca343395776a2593dd48806b329"

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

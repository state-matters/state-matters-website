const router = require("express").Router()
const axios = require("axios")

const BASE_URL = "https://cdn.contentful.com"
const PREVIEW_BASE_URL = "https://preview.contentful.com"
const SPACE_ID = "021ulla0m5co"
const ACCESS_TOKEN =
  "6bd6e5edf50206eb6e65f7a6feb5959b38facca343395776a2593dd48806b329"
const PREVIEW_ACCESS_TOKEN =
  "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0"

router.route("/").get(async (req, res, next) => {
  const url = `${PREVIEW_BASE_URL}/spaces/${SPACE_ID}/entries?select=fields.title,fields.contributor&access_token=${PREVIEW_ACCESS_TOKEN}&content_type=article`
  try {
    console.log(url)
    const response = await axios.get(url)
    res.json(response.data)
  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

module.exports = router

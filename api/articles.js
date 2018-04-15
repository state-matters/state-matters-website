const router = require("express").Router()
const axios = require("axios")
const contentful = require("contentful")

const client = contentful.createClient({
  space: "021ulla0m5co",
  accessToken:
    "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0",
  host: "preview.contentful.com"
})

router.get("/", async (req, res, next) => {
  try {
    const response = await client.getEntries({
      content_type: "article",
      select: "sys.id,fields.title,fields.contributor"
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

module.exports = router

const router = require("express").Router()
const axios = require("axios")
const contentful = require("contentful")

const client = contentful.createClient({
  space: "021ulla0m5co",
  accessToken:
    "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0",
  host: "preview.contentful.com"
})

router
  .get("/", async (req, res, next) => {
    try {
      // we're using async functions here. It's a new JS feature.
      // docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

      const response = await client.getEntries({
        content_type: "bill",
        // for the index api call only return the title and video url
        select: "sys.id,fields.title,fields.video"
      })
      res.json(response)
    } catch (error) {
      res.status(400)
      res.json(error)
    }
  })
  .get("/:bill_id", async (req, res, next) => {
    try {
      const repsonse = await client.getEntry(req.params.bill_id)
    } catch (error) {
      res.status(400)
      res.json(error)
    }
  })

module.exports = router

const router = require("express").Router()
const axios = require("axios")
const contentful = require("contentful")

const config = (process.env.NODE_ENV = "production"
  ? {
      space: "021ulla0m5co",
      accessToken: process.env.PROD_API_KEY
    }
  : {
      space: "021ulla0m5co",
      accessToken: process.env.DEV_API_KEY,
      host: "preview.contentful.com"
    })
const client = contentful.createClient(config)

router.get("/", async (req, res, next) => {
  try {
    const lessons = await client.getEntries({
      content_type: "lesson",
      select: "sys.id,fields.title,fields.video"
    })
    res.status(200).json(lessons)
  } catch (err) {
    res.status(400).json({ message: "something went wrong" })
  }
})

module.exports = router

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
    const lessons = await client.getEntries({
      content_type: "lesson",
      select: "sys.id,fields.title,fields.video,fields.poster"
    })
    console.log(lessons)
    res.status(200).json(lessons)
  } catch (err) {
    res.status(400).json({ message: "something went wrong" })
  }
})

module.exports = router

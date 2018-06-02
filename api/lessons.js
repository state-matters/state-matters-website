const router = require("express").Router()
const axios = require("axios")
const contentful = require("contentful")

const config =
  process.env.NODE_ENV === "production"
    ? {
        space: "021ulla0m5co",
        accessToken: process.env.PROD_API_KEY
      }
    : {
        space: "021ulla0m5co",
        accessToken: process.env.DEV_API_KEY,
        host: "preview.contentful.com"
      }

console.log(config, process.env.NODE_ENV)
const client = contentful.createClient(config)

router
  .get("/", async (req, res, next) => {
    try {
      const lessons = await client.getEntries({
        content_type: "lesson",
        select: "sys.id,fields.title,fields.video,fields.poster"
      })
      res.status(200).json(lessons)
    } catch (err) {
      res.status(400).json({ message: "something went wrong" })
    }
  })
  .get("/:lesson_id", async (req, res) => {
    try {
      const lesson = await client.getEntry(req.params.lesson_id)
      res.status(200).json(lesson)
    } catch (error) {
      res.status(400).json(error)
    }
  })

module.exports = router

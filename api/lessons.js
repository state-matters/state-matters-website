const router = require("express").Router()
const axios = require("axios")
const contentful = require("contentful")
const { normalize, schema } = require("normalizr")

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

const client = contentful.createClient(config)

router
  .get("/", async (req, res, next) => {
    try {
      const { items } = await client.getEntries({
        content_type: "lesson",
        select: "sys.id,fields.title,fields.video,fields.poster"
      })
      const lessonSchema = new schema.Entity("lessons", undefined, {
        idAttribute: v => v.sys.id
      })
      const lessonListSchema = new schema.Array(lessonSchema)
      const {
        entities: { lessons }
      } = normalize(items, lessonListSchema)
      res.status(200).json(lessons)
    } catch (error) {
      res.status(400).json(error)
    }
  })
  .get("/:lesson_id", async (req, res) => {
    if (!req.params.lesson_id)
      return res.status(422).json({ message: "no id attached" })
    try {
      const { items } = await client.getEntries({
        "sys.id": req.params.lesson_id
      })
      res.status(200).json(items[0])
    } catch (error) {
      res.status(400).json(error)
    }
  })

module.exports = router

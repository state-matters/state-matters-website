const router = require("express").Router()
const { normalize, schema } = require("normalizr")
const contentful = require("contentful")
const config = require("./config")

const client = contentful.createClient(config)

router
  .get("/", async (req, res, next) => {
    try {
      const { items } = await client.getEntries({
        content_type: "lesson",
        select: "sys.id,fields.title,fields.video,fields.poster,fields.youTubeId"
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

import { Router } from "express"
import { normalize, schema } from "normalizr"
import { contentfulClient } from "../server"

const router = Router()

router
  .get("/", async (req, res, next) => {
    try {
      const { items } = await contentfulClient.getEntries({
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
      const { items } = await contentfulClient.getEntries({
        "sys.id": req.params.lesson_id
      })
      res.status(200).json(items[0])
    } catch (error) {
      res.status(400).json(error)
    }
  })

export default router

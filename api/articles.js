const router = require("express").Router()
const contentful = require("contentful")
const { normalize, schema } = require("normalizr")

const client = contentful.createClient({
  space: "021ulla0m5co",
  accessToken:
    "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0",
  host: "preview.contentful.com"
})

router.get("/", async (req, res, next) => {
  try {
    const { items } = await client.getEntries({
      content_type: "article",
      select: "sys.id,fields.title,fields.contributor,fields.photo"
    })
    const articleSchema = new schema.Entity("articles", undefined, {
      idAttribute: lesson => lesson.sys.id
    })
    const articleListSchema = new schema.Array(articleSchema)
    const {
      entities: { articles }
    } = normalize(items, articleListSchema)
    res.json(articles)
  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

module.exports = router

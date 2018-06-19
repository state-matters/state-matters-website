const router = require("express").Router()
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

const client = contentful.createClient(config)

router.get("/", async (req, res) => {
  try {
    const { items } = await client.getEntries({ content_type: "teamMember" })
    res
      .status(200)
      .json(items)
      .end()
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

module.exports = router

const router = require("express").Router()
const axios = require("axios")
const contentful = require("contentful")
const { normalize, schema } = require("normalizr")

const client = contentful.createClient({
  space: "021ulla0m5co",
  accessToken:
    "709d8f98e56158641d25ba23ceb57029ecc91e0a9a11f35fa6e0f666ffbeb4d0",
  host: "preview.contentful.com"
})

router
  .get("/", async (req, res, next) => {
    try {
      const { items } = await client.getEntries({
        content_type: "bill",
        select:
          "sys.id,fields.title,fields.billNumber,fields.video,fields.poster,fields.status"
      })
      const billSchema = new schema.Entity("bills", undefined, {
        idAttribute: v => v.sys.id
      })
      const billListSchema = new schema.Array(billSchema)
      const {
        entities: { bills }
      } = normalize(items, billListSchema)
      res.status(200).json(bills)
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
  })
  .get("/:bill_id", async (req, res) => {
    if (!req.params.bill_id)
      return res.status(400).json({ message: "No id present" })
    try {
      const response = await client.getEntries({ "sys.id": req.params.bill_id })
      const bill = response.items[0]
      return res.status(200).json(bill)
    } catch (error) {
      return res.status(400).json(error)
    }
  })

module.exports = router

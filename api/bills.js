const router = require("express").Router()
const contentful = require("contentful")
const config = require("./config")

const client = contentful.createClient(config)

router
  .get("/", async (req, res) => {
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
      const response = await client.getEntries({
        "sys.id": req.params.bill_id
      })
      const bill = response.items[0]
      return res.status(200).json(bill)
    } catch (error) {
      return res.status(400).json(error)
    }
  })

module.exports = router

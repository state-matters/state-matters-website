import { Router } from "express"
import { contentfulClient } from "../server"

const router = Router()

router.get("/", async (req, res) => {
  try {
    const { items } = await contentfulClient.getEntries({
      content_type: "teamMember"
    })
    res
      .status(200)
      .json(items)
      .end()
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

export default router

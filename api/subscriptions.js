const router = require("express").Router()
const axios = require("axios")

router
  .route("/")
  .all((req, res, next) => next())
  .post(async (req, res, next) => {
    const { email, first_name, last_name } = req.body
    const subscribeConfig = {
      method: "post",
      url: "https://api.mailchimp.com/3.0/lists/<list_id>/members",
      data: {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first_name,
          LNAME: last_name
        }
      }
    }
    const getSubsUrl = "https://api.mailchimp.com/3.0/lists/<list_id>"
    try {
      const subcriptionRepsonse = await axios(subscribeConfig)
      const subscribed = await axios(getSubsUrl)
      res.json({ success: true, members: subscribed.data.stats.member_count })
    } catch (error) {
      res.status(500)
      res.json(error)
    }
  })

module.exports = router

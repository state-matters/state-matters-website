const router = require("express").Router()
const axios = require("axios")

router.route("/").post(async (req, res) => {
  const { email, first_name = "", last_name = "" } = req.body
  const subscribeConfig = {
    method: "post",
    url: "https://us17.api.mailchimp.com/3.0/lists/ea066b0443/members",
    auth: {
      username: "anything",
      password: process.env.MAIL_API_KEY
    },
    data: JSON.stringify({
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first_name,
        LNAME: last_name
      }
    })
  }
  try {
    const { data } = await axios(subscribeConfig)
    return res.status(200).json({ email: data.email_address })
  } catch (error) {
    const { data } = error.response
    return res.status(data.status).json({ message: data.detail })
  }
})

module.exports = router

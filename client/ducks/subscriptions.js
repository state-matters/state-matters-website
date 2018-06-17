import axios from "axios"

const SUBSCRIBE_EMAIL_SUCCESS =
  "state_matters/subscriptions/SUBSCRIBE_EMAIL_SUCCESS"

const intialState = { subscribed: localStorage.getItem("subscribed") }

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case SUBSCRIBE_EMAIL_SUCCESS:
      return { ...state, subscribed: true }
    default:
      return state
  }
}

export const handleSubscribe = subscriber => async dispatch => {
  try {
    const response = await axios.post("/api/subscriptions", subscriber)
    localStorage.setItem("subscribed", true)
    dispatch({ type: SUBSCRIBE_EMAIL_SUCCESS, payload: response.data.email })
  } catch (error) {
    console.log(error)
  }
}

const subscriptionSuccess = () => ({
  type: SUBSCRIBE_EMAIL
})

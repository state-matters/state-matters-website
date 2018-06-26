import axios from "axios"

const SUBSCRIBE_EMAIL_SUCCESS =
  "state_matters/subscriptions/SUBSCRIBE_EMAIL_SUCCESS"
const TOGGLE_SUBSCRIBED = "state_matters/subscriptions/TOGGLE_SUBSCRIBED"
const SUBSCRIBE_EMAIL_FAIL = "state_matters/subscriptions/SUBSCRIBE_EMAIL_FAIL"

const intialState = {
  subscribed: localStorage.getItem("subscribed"),
  email: "",
  duplicate: false
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case SUBSCRIBE_EMAIL_SUCCESS:
      return { ...state, subscribed: true, email: action.payload }
    case SUBSCRIBE_EMAIL_FAIL:
      return { ...state, subscribed: false, duplicate: true }
    case TOGGLE_SUBSCRIBED:
      return { ...state, subscribed: false }
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
    localStorage.removeItem("subscribed")
    dispatch({ type: SUBSCRIBE_EMAIL_FAIL })
  }
}

export const toggleSubscribed = () => dispatch =>
  dispatch({ type: TOGGLE_SUBSCRIBED })

const subscriptionSuccess = () => ({
  type: SUBSCRIBE_EMAIL
})

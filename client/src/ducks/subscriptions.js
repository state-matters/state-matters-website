const SUBSCRIBE_EMAIL = "state_matters/subscriptions/SUBSCRIBE_EMAIL"

const intialState = {}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case SUBSCRIBE_EMAIL:
      return state
    default:
      return state
  }
}

export const handleSubscribe = obj => dispatch => {
  fetch("/api/subscriptions")
}

const subscriptionSuccess = _ => ({
  type: SUBSCRIBE_EMAIL
})

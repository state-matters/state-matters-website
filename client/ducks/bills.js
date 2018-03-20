import axios from "axios"

const PLAY_VIDEO = "state_matters/bills/PLAY_VIDEO"
const GET_BILLS = "state_matters/bills/GET_BILLS"
const GET_BILLS_SUCCESS = "state_matters/bills/GET_BILLS_SUCCESS"
const GET_BILLS_FAIL = "state_matters/bills/GET_BILLS_FAIL"

const intialState = []

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case PLAY_VIDEO:
      return state
    case GET_BILLS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const getBills = _ => async dispatch => {
  dispatch({ type: GET_BILLS })
  console.log("get bills")
  try {
    const { data: { items } } = await axios("/api/bills")
    console.log(items)
    dispatch({
      type: GET_BILLS_SUCCESS,
      payload: items
    })
  } catch (err) {
    dispatch({
      type: GET_BILLS_FAIL,
      payload: err
    })
  }
}

export const playVideo = _ => ({
  type: PLAY_VIDEO
})

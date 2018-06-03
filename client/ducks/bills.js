import axios from "axios"

export const GET_BILLS = "state_matters/bills/GET_BILLS"
export const GET_BILL = "state_matters/bills/GET_BILL"
export const GET_BILL_SUCCESS = "state_matters/bills/GET_BILL_SUCCESS"
export const GET_BILL_FAIL = "state_matters/bills/GET_BILL_FAIL"
export const GET_BILLS_SUCCESS = "state_matters/bills/GET_BILLS_SUCCESS"
export const GET_BILLS_FAIL = "state_matters/bills/GET_BILLS_FAIL"
export const CHANGE_SELECTION = "state_matters/bills/CHANGE_SELECTION"

const intialState = {
  loaded: false,
  items: {}
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_BILLS_SUCCESS:
      return {
        ...state,
        loaded: true,
        items: {
          ...state.items,
          ...action.payload
        }
      }
    case GET_BILL_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            ...action.payload.data
          }
        }
      }
    case CHANGE_SELECTION:
      return {
        ...state,
        selectedId: action.payload
      }
    default:
      return state
  }
}

export const getAllBills = _ => async dispatch => {
  dispatch({ type: GET_BILLS })
  try {
    const { data } = await axios("/api/bills")
    dispatch({
      type: GET_BILLS_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: GET_BILLS_FAIL,
      payload: err
    })
  }
}

export const getBill = id => async dispatch => {
  dispatch({ type: GET_BILL })
  try {
    const { data } = await axios(`/api/bills/${id}`)
    dispatch({
      type: GET_BILL_SUCCESS,
      payload: {
        data,
        id
      }
    })
  } catch (error) {
    dispatch({
      type: GET_BILL_FAIL,
      payload: error
    })
  }
}

export const changeSelectedVideo = id => ({
  type: CHANGE_SELECTION,
  payload: id
})

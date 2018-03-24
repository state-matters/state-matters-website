import axios from "axios"
import { normalize, schema } from "normalizr"

export const GET_BILLS = "state_matters/bills/GET_BILLS"
export const GET_BILLS_SUCCESS = "state_matters/bills/GET_BILLS_SUCCESS"
export const GET_BILLS_FAIL = "state_matters/bills/GET_BILLS_FAIL"
export const NEXT_BILL = "state_matters/bills/NEXT_BILL"

const intialState = {
  loaded: false,
  items: null,
  selectedId: null
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_BILLS_SUCCESS:
      return { ...state, ...action.payload }
    case NEXT_BILL:
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
    const { data: { entities, result } } = await axios("/api/bills")
    dispatch({
      type: GET_BILLS_SUCCESS,
      payload: {
        items: entities.bills,
        loaded: true,
        selectedId: result[0],
        result
      }
    })
  } catch (err) {
    dispatch({
      type: GET_BILLS_FAIL,
      payload: err
    })
  }
}

export const nextBill = id => ({
  type: NEXT_BILL,
  payload: id
})

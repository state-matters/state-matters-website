import axios from "axios"
import { normalize, schema } from "normalizr"

export const GET_ALL_BILLS = "state_matters/bills/GET_BILLS"
export const GET_ALL_BILLS_SUCCESS = "state_matters/bills/GET_BILLS_SUCCESS"
export const GET_ALL_BILLS_FAIL = "state_matters/bills/GET_BILLS_FAIL"
export const CHANGE_SELECTION = "state_matters/bills/CHANGE_SELECTION"

const intialState = {
  loaded: false,
  items: null,
  selectedId: null,
  idList: []
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_BILLS_SUCCESS:
      return { ...state, ...action.payload }
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
  dispatch({ type: GET_ALL_BILLS })
  try {
    const { data: { entities, result } } = await axios("/api/bills")
    dispatch({
      type: GET_ALL_BILLS_SUCCESS,
      payload: {
        items: entities.bills,
        loaded: true,
        selectedId: result[0],
        idList: result
      }
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_BILLS_FAIL,
      payload: err
    })
  }
}

export const changeSelectedVideo = id => ({
  type: CHANGE_SELECTION,
  payload: id
})

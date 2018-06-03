import axios from "axios"

////
// constants
////

export const GET_LESSONS = "state_matters/lessons/GET_LESSONS"
export const GET_LESSONS_SUCCESS = "state_matters/lessons/GET_LESSONS_SUCCESS"
export const GET_LESSONS_FAIL = "state_matters/lessons/GET_LESSONS_FAIL"
export const CHANGE_SELECTION = "state_matters/lessons/CHANGE_SELECTION"

const intialState = {
  loaded: false,
  items: null,
  selectedId: null,
  idList: []
}

////
// reducer
////

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_LESSONS_SUCCESS:
      return {
        ...state,
        loaded: true,
        items: { ...state.items, ...action.payload }
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

////
// actions
////

export const getLessons = _ => async dispatch => {
  dispatch({ type: GET_LESSONS })
  try {
    const { data } = await axios("/api/lessons")
    dispatch({
      type: GET_LESSONS_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: GET_LESSONS_FAIL,
      payload: err
    })
  }
}

export const changelessonVideo = id => ({
  type: CHANGE_SELECTION,
  payload: id
})

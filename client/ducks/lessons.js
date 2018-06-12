import axios from "axios"

////
// constants
////

export const GET_LESSONS_INDEX = "state_matters/lessons/GET_LESSONS"
export const GET_LESSONS_INDEX_SUCCESS =
  "state_matters/lessons/GET_LESSONS_SUCCESS"
export const GET_LESSONS_INDEX_FAIL = "state_matters/lessons/GET_LESSONS_FAIL"
export const GET_LESSON = "state_matters/lessons/GET_LESSON"
export const GET_LESSON_SUCCESS = "state_matters/lessons/GET_LESSON_SUCCESS"
export const GET_LESSON_FAIL = "state_matters/lessons/GET_LESSON_FAIL"
export const CHANGE_SELECTION = "state_matters/lessons/CHANGE_SELECTION"

const intialState = {
  loaded: false,
  items: {},
  selectedId: null,
  idList: []
}

////
// reducer
////

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_LESSONS_INDEX_SUCCESS:
      return {
        ...state,
        loaded: true,
        items: { ...state.items, ...action.payload }
      }
    case GET_LESSON_SUCCESS:
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
    default:
      return state
  }
}

////
// actions
////

export const getLessons = _ => async dispatch => {
  dispatch({ type: GET_LESSONS_INDEX })
  try {
    const { data } = await axios("/api/lessons")
    dispatch({
      type: GET_LESSONS_INDEX_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: GET_LESSONS_INDEX_FAIL,
      payload: err
    })
  }
}

export const getLesson = id => async dispatch => {
  dispatch({ type: GET_LESSON })
  try {
    const { data } = await axios(`/api/lessons/${id}`)
    console.log(data)
    dispatch({
      type: GET_LESSON_SUCCESS,
      payload: {
        data,
        id
      }
    })
  } catch (error) {
    dispatch({ type: GET_LESSON_FAIL, payload: error })
  }
}

export const changelessonVideo = id => ({
  type: CHANGE_SELECTION,
  payload: id
})

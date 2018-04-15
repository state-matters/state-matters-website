import axios from "axios"

// constants
const GET_ARTICLES = "state_matters/articles/GET_ARTICLES"
const GET_ARTICLES_SUCCESS = "state_matters/articles/GET_ARTICLES_SUCCESS"
const GET_ARTICLES_FAIL = "state_matters/articles/GET_ARTICLES_FAIL"

const initalState = {
  items: [],
  loaded: false
}

// reducer
export default (state = initalState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return state
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loaded: true,
        items: action.payload
      }

    default:
      return state
  }
}

// actions
export const getArticles = _ => async dispatch => {
  dispatch({ type: GET_ARTICLES })
  try {
    const response = await axios("/api/articles")
    dispatch({ type: GET_ARTICLES_SUCCESS, payload: response.data.items })
  } catch (err) {
    dispatch({ type: GET_ARTICLES_FAIL, payload: err })
  }
}

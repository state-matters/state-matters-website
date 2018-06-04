import axios from "axios"

// constants
const GET_ARTICLES = "state_matters/articles/GET_ARTICLES"
const GET_ARTICLES_SUCCESS = "state_matters/articles/GET_ARTICLES_SUCCESS"
const GET_ARTICLES_FAIL = "state_matters/articles/GET_ARTICLES_FAIL"

const initalState = {
  loaded: false,
  items: {}
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
        items: {
          ...state.items,
          ...action.payload
        }
      }

    default:
      return state
  }
}

// actions
export const getArticles = _ => async dispatch => {
  dispatch({ type: GET_ARTICLES })
  try {
    const { data } = await axios("/api/articles")
    dispatch({ type: GET_ARTICLES_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: GET_ARTICLES_FAIL, payload: err })
  }
}

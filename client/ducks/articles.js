import axios from "axios"

// constants
const GET_ARTICLES_INDEX = "state_matters/articles/GET_ARTICLES"
const GET_ARTICLES_INDEX_SUCCESS = "state_matters/articles/GET_ARTICLES_SUCCESS"
const GET_ARTICLES_INDEX_FAIL = "state_matters/articles/GET_ARTICLES_FAIL"

const GET_ARTICLE = "state_matters/articles/GET_ARTICLE"
const GET_ARTICLE_SUCCESS = "state_matters/articles/GET_ARTICLE_SUCCESS"
const GET_ARTICLE_FAIL = "state_matters/articles/GET_ARTICLE_FAIL"

const initalState = {
  loaded: false,
  items: {}
}

// reducer
export default (state = initalState, action) => {
  switch (action.type) {
    case GET_ARTICLES_INDEX:
      return state
    case GET_ARTICLES_INDEX_SUCCESS:
      return {
        ...state,
        loaded: true,
        items: {
          ...state.items,
          ...action.payload
        }
      }
    case GET_ARTICLE_SUCCESS:
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

// actions
export const getArticles = _ => async dispatch => {
  dispatch({ type: GET_ARTICLES_INDEX })
  try {
    const { data } = await axios("/api/articles")
    dispatch({ type: GET_ARTICLES_INDEX_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: GET_ARTICLES_INDEX_FAIL, payload: err })
  }
}

export const getArticle = id => async dispatch => {
  dispatch({ type: GET_ARTICLE })
  try {
    const { data } = await axios(`/api/articles/${id}`)
    dispatch({ type: GET_ARTICLE_SUCCESS, payload: { data, id } })
  } catch (error) {
    dispatch({ type: GET_ARTICLE_FAIL })
  }
}

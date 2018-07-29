import { combineReducers } from "redux"

import bills from "./bills"
import subscriptions from "./subscriptions"
import articles from "./articles"
import lessons from "./lessons"

export default combineReducers({
  bills,
  subscriptions,
  articles,
  lessons
})

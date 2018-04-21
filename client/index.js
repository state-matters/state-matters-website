import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { bills, subscriptions, articles, lessons } from "./ducks"
import theme from "./theme"
import baseStyles from "./baseStyles"

import App from "./App"

const reducers = combineReducers({
  bills,
  subscriptions,
  articles,
  lessons
})

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()

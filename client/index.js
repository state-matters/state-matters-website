import "./baseStyles"
import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import reducer from "ducks"
import ScrollToTop from "components/ScrollToTop"
import App from "./App"

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, enhancedCompose(applyMiddleware(thunk)))

hydrate(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
)

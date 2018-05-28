import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { bills, subscriptions, articles, lessons } from "./ducks"
import baseStyles from "./baseStyles"

import App from "./App"

const reducers = combineReducers({
  bills,
  subscriptions,
  articles,
  lessons
})

const store = createStore(reducers, applyMiddleware(thunk))

const ScrollToTop = withRouter(
  class extends React.Component {
    componentDidUpdate = prevProps => {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
    render = _ => this.props.children
  }
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()

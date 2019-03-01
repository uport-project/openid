import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'

import reducer from './reducer'

export const history = createBrowserHistory()

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: { data: null }
}

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history))
  )
)

export default store

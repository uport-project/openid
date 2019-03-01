import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

// Layouts
import App from './App'

// Redux Store
import store, { history } from './store'

ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
)

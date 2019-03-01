import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'

import { Home, NavBar } from './components'
import { uport, handleDisclosure } from './uport'

// Styles
import './App.css'
import './assets/css/open-sans.css'

// Protect dashboard page with login
const App = ({restoreUserData, loggedIn}) => {
  // Auto-login if credentials are cached in localStorage
  if (!loggedIn && uport.did) restoreUserData(uport.state)
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </div>
  )
}

export default connect(
  // mapStateToProps
  (state) => ({
    loggedIn: !!state.user.data
  }),
  // mapDispatchToProps
  (dispatch) => ({
    restoreUserData: handleDisclosure(dispatch)
  })
)(App)

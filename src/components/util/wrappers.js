import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect'

import { routerActions } from 'connected-react-router'

// Layout Component Wrappers
export const UserIsAuthenticated = connectedReduxRedirect({
  authenticatedSelector: state => !!(state.user && state.user.data),
  redirectPath: '/',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
})

export const UserIsNotAuthenticated = connectedReduxRedirect({
  authenticatedSelector: state => !!(state.user && state.user.data === null),
  redirectAction: routerActions.replace,
  redirectPath: (state, ownProps) => ownProps.location.query.redirect || '/dashboard',
  wrapperDisplayName: 'UserIsNotAuthenticated',
  allowRedirectBack: false
})

// UI Component Wrappers

export const VisibleOnlyAuth = connectedAuthWrapper({
  authenticatedSelector: state => !!(state.user && state.user.data),
  wrapperDisplayName: 'VisibleOnlyAuth',
})

export const HiddenOnlyAuth = connectedAuthWrapper({
  authenticatedSelector: state => !!(state.user && state.user.data === null),
  wrapperDisplayName: 'HiddenOnlyAuth',
})

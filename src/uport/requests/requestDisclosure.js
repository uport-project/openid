import store, { history } from '../../store'
import { uport } from '../connect'
import { userDataCleared, userDisclosedData } from '../actions'

// The request id to manage uport disclosure requests
const DISCLOSURE_REQUEST = 'DISCLOSURE_REQUEST'

/**
 * Request a disclosure from a user, effectively logging them in.
 * @param {Object}    opts            options to pass to requestDisclosure
 * @param {String[]}  opts.requested  self-attested attributes to request from the user
 * @param {String[]}  opts.verified   verifiable claims to be requested from the user (i.e. signed by someone else)
 */
export function requestDisclosure({requested = ['name'], verified}) {
  // Initiate a disclosure request.  This sets up a transport channel using the 
  // DISCLOSURE_REQUEST id, where we will listen for the response
  uport.requestDisclosure({
    requested, verified, 
    notifications: true
  }, DISCLOSURE_REQUEST)
}

/**
 * Create a dispatcher for a login/disclosure action that navigates to
 * the dashboard page
 * @param   {Function}  dispatch function to use
 * @returns {Function}  dispatcher for the disclosure action
 */
export function handleDisclosure(dispatch) {
  return function(userData) {
    dispatch(userDisclosedData(userData))
  
    // Use a manual redirect here as opposed to a wrapper.
    // This way, once logged in a user can still access the home page.
    if ('redirect' in history.location) {
      return history.push(decodeURIComponent(history.location.query.redirect))
    }
  
    // This is the default page to redirect to on a dislcosure action
    return history.push('/dashboard')
  }
}

/**
 * Set up the disclosure response listener on any page that imports from this file.
 * This ensures that the response can always be captured when the login request
 * is fired, even if the page is reloaded on a mobile device after returning from
 * the uPort mobile app.
 */
uport.onResponse(DISCLOSURE_REQUEST).then(({res}) => handleDisclosure(store.dispatch)(res))

/**
 * Clear all user data from the browser, effectively 'logging out'
 * @returns {Function}  dispatcher for the data clearing action bundled with 
 *                      uport logout and navigation back to home screen
 */
export function clearUserData(dispatch) {
  return function() {
    uport.logout()
    dispatch(userDataCleared())
    history.push('/')
  }
}
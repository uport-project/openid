import store from '../../store'
import { uport } from '../connect'
import { jwtResponseReceived } from '../actions'

// The request id to manage uport verification issuance
const CUSTOM_JWT = 'CUSTOM_JWT'

/**
 * Send an arbitrary JWT to a user
 * @param {Object}    claim    the object containing the claim to issue to the user 
 */
export function sendJWT(claim) {
  // Send a custom JWT to a user.  This sets up a transport channel using the 
  // CUSTOM_JWT id, where we will listen for the response
  uport.sendJWT(claim, CUSTOM_JWT)
}

/**
 * Create a dispatcher for the action corresponding to a response from sending an arbitrary JWT
 * @param   {Function}  dispatch function to use
 * @returns {Function}  dispatcher for the JWT action
 */
export function handleJWTResponse(dispatch) {
  return function(claim) {
    // any other specific logic for this request can go here:
    
    // ...

    // dispatch the action to the redux store
    dispatch(jwtResponseReceived(claim))
  }
}

/**
 * Set up the jwt response listener on any page that imports from this file.
 * This ensures that the response can always be captured when the login request
 * is fired, even if the page is reloaded on a mobile device after returning from
 * the uPort mobile app.
 */
uport.onResponse(CUSTOM_JWT).then(({res}) => handleJWTResponse(store.dispatch)(res))

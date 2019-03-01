import store from '../../store'
import { uport } from '../connect'
import { verificationAccepted } from '../actions'

// The request id to manage uport verification issuance
const VERIFICATION = 'VERIFICATION'

/**
 * Issue a verification to a user
 * @param {Object}    claim    the object containing the claim to issue to the user 
 */
export function sendVerification(claim) {
  // Initiate sending a verification.  This sets up a transport channel using the 
  // VERIFICATION id, where we will listen for the response (i.e. whether the verification is accepted)
  uport.sendVerification(claim, VERIFICATION)
}

/**
 * Create a dispatcher for the action corresponding to an accepted verification
 * @param   {Function}  dispatch function to use
 * @returns {Function}  dispatcher for the disclosure action
 */
export function handleVerification(dispatch) {
  return function(claim) {
    // any other specific logic for this request can go here:
    
    // ...

    // dispatch the action to the redux store
    dispatch(verificationAccepted(claim))
  }
}

/**
 * Set up the verification response listener on any page that imports from this file.
 * This ensures that the response can always be captured when the login request
 * is fired, even if the page is reloaded on a mobile device after returning from
 * the uPort mobile app.
 */
uport.onResponse(VERIFICATION).then(({res}) => handleVerification(store.dispatch)(res))

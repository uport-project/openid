import store from '../../store'
import { uport } from '../connect'
import { verificationSigned } from '../actions'

// The request id to manage uport disclosure requests
const SIGNATURE_REQUEST = 'SIGNATURE_REQUEST'

/**
 * Request a disclosure from a user, effectively logging them in.
 * @param {Object}    unsignedClaim     
 */
export function requestVerificationSignature(unsignedClaim) {
  // Initiate a verification signature request.  This sets up a transport channel using the 
  // SIGNATURE_REQUEST id, where we will listen for the response
  uport.requestVerificationSignature(unsignedClaim, SIGNATURE_REQUEST)
}

/**
 * Create a dispatcher for the action corresponding to a completed signature request
 * @param   {Function}  dispatch function to use
 * @returns {Function}  dispatcher for the disclosure action
 */
export function handleVerificationSignature(dispatch) {
  return function() {
    // any other specific logic for this request can go here:
    
    // ...

    // dispatch the action to the redux store
    dispatch(verificationSigned())
  }
}

/**
 * Set up the verification signature response listener on any page that imports from this file.
 * This ensures that the response can always be captured when the login request
 * is fired, even if the page is reloaded on a mobile device after returning from
 * the uPort mobile app.
 */
uport.onResponse(SIGNATURE_REQUEST).then(({res}) => handleVerificationSignature(store.dispatch)(res))

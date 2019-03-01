import store from '../../store'
import { uport } from '../connect'
import { transactionApproved } from '../actions'

// The request id to manage uport disclosure requests
const TRANSACTION_REQUEST = 'TRANSACTION_REQUEST'

/**
 * Send an ethereum transaction on behalf of a user.  Requires their approval
 * in-app.
 * 
 * @param {Object}    txObject     
 */
export function sendTransaction(txObject) {
  // Initiate a transaction.  This sets up a transport channel using the 
  // TRANSACTION_REQUEST id, where we will listen for the response 
  uport.sendTransaction(txObject, TRANSACTION_REQUEST)
}

/**
 * Create a dispatcher for the action corresponding to a completed signature request
 * @param   {Function}  dispatch function to use
 * @returns {Function}  dispatcher for the disclosure action
 */
export function handleTransaction(dispatch) {
  return function() {
    // any other specific logic for this request can go here:
    
    // ...

    // dispatch the action to the redux store
    dispatch(transactionApproved())
  }
}

/**
 * Set up the verification signature response listener on any page that imports from this file.
 * This ensures that the response can always be captured when the login request
 * is fired, even if the page is reloaded on a mobile device after returning from
 * the uPort mobile app.
 */
uport.onResponse(TRANSACTION_REQUEST).then(({res}) => handleTransaction(store.dispatch)(res))

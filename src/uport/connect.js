import { Connect } from 'uport-connect'

/**
 * This is where you can define the Connect Instance that will manage
 * interactions with a uport mobile wallet for your dapp.  By default, 
 * Connect will create it's own identity (keypair) for each instance of
 * the dapp, i.e. each browser running this code.  The Connect object then
 * contains a unique "app-instance identity," which allows it to sign and
 * exchange credentials with other uPort identities.
 *
 * When an instance of Connect requests credentials from a user, it stores
 * the user's DID (identifying string), along with any information requested,
 * in the `state` property of the object.
 *
 * Connect will persist much of its state to localStorage, including the 
 * app-instance keypair, and any attributes requested from a user.  This 
 * essentially accomplishes a persistant "login" for the user, and subsequent
 * requests from the dapp will come from the same app identity.  To "logout"
 * there is a Connect.logout() method, which clears all personally identifying
 * information from the instance, as well as from localStorage.  The app-instance
 * identity remains, allowing users to login again to an instance of the application
 * with a recognized identity.
 * 
 */

export const uport = new Connect('Truffle Box', {
  // Connect Options:
  
})

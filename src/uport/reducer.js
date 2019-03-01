import { DISCLOSURE_RECEIVED, USER_DATA_CLEARED, VERIFICATION_SIGNATURE_RECEIVED, TX_REQUEST_APPROVED, VERIFICATION_RECEIVED } from "./actions";

const initialState = {
  data: null
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISCLOSURE_RECEIVED: 
      return { ...state, data: payload }
    case USER_DATA_CLEARED:
      return { ...state, data: null }
    case VERIFICATION_SIGNATURE_RECEIVED:
      /* Custom handling here */
      return state
    case TX_REQUEST_APPROVED:
      /* Custom handling here */
      return state
    case VERIFICATION_RECEIVED:
      /* Custom handling here */
      return state
    default:
      return state
  }
}

export default userReducer

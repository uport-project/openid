

// export const DISCLOSURE_REQUESTED = '@uport/DISCLOSURE_REQUESTED'
export const DISCLOSURE_RECEIVED = '@uport/DISCLOSURE_RECEIVED'

export function userDisclosedData(userData) {
  return {
    type: DISCLOSURE_RECEIVED,
    payload: userData
  }
}

// export const VERIFICATION_SIGNATURE_REQUESTED = '@uport/VERIFICATION_SIGNATURE_REQUESTED'
export const VERIFICATION_SIGNATURE_RECEIVED = '@uport/VERIFICATION_SIGNATURE_RECEIVED'

export function verificationSigned() {
  return {
    type: VERIFICATION_SIGNATURE_RECEIVED
  }
}

// export const VERIFICATION_SENT = '@uport/VERIFICATION_SENT'
export const VERIFICATION_RECEIVED = '@uport/VERIFICATION_RECEIEVED'

export function verificationAccepted() {
  return {
    type: VERIFICATION_RECEIVED
  }
}

// export const TX_REQUEST_SENT = '@uport/TX_REQUEST_SENT'
export const TX_REQUEST_APPROVED = '@uport/TX_REQUEST_APPROVED'

export function transactionApproved() {
  return {
    type: TX_REQUEST_APPROVED
  }
}

// export const JWT_SENT = '@uport/JWT_SENT
export const JWT_RESPONSE_RECEIVED = '@uport/JWT_RESPONSE_RECEIVED'

export function jwtResponseReceived() {
  return {
    type: JWT_RESPONSE_RECEIVED
  }
}

// Logout / clear data 
export const USER_DATA_CLEARED = '@uport/USER_DATA_CLEARED'

export function userDataCleared() {
  return {
    type: USER_DATA_CLEARED,
  }
}

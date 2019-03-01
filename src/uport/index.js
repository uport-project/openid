
import { uport } from './connect'
import {
  clearUserData, 
  requestDisclosure, handleDisclosure, 
  requestVerificationSignature, handleVerificationSignature, 
  sendVerification, handleVerification, 
  sendTransaction, handleTransaction,
  sendJWT, handleJWTResponse
} from './requests'

export { 
  uport, 
  clearUserData, 
  requestDisclosure, handleDisclosure, 
  requestVerificationSignature, handleVerificationSignature, 
  sendVerification, handleVerification, 
  sendTransaction, handleTransaction,
  sendJWT, handleJWTResponse
}
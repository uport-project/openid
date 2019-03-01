import { combineReducers } from 'redux'
import userReducer from './uport/reducer'

const reducer = combineReducers({
  user: userReducer
})

export default reducer

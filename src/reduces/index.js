import { combineReducers } from 'redux'
import auth from './auth'
import flashMessage from './flash'
const rootReducers = combineReducers({
    auth,
    flashMessage
})

export default rootReducers
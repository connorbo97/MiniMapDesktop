import { combineReducers } from "redux";
import UserReducer from './UserReducer.js'
import WindowReducer from './WindowReducer.js'

const rootReducer = combineReducers({
    user: UserReducer,
    window: WindowReducer
})

export default rootReducer
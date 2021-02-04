import {
    CHECKED_AUTH,
    LOAD_USER_DATA,
    LOGGING_OUT,
    CLEAR_USER_DATA
} from '../actions'

const defaultUser = {
    displayName: null,
    email: null,
    emailVerified: null,
    photoURL: null,
    isAnonymous: null,
    uid: null,
    providerData: null,
}

const initialState = {
    checkedAuth: false,
    loggingOut: false,
    ...defaultUser,
};

export default (state = initialState, action) => {
    switch(action.type){
        case CHECKED_AUTH:
            return { ...state, checkedAuth: action.val }
        case LOAD_USER_DATA:
            return { ...state, ...action.val }
            return state.merge(action.val)
        case CLEAR_USER_DATA:
            return { ...state, ...defaultUser }
            return state.merge(defaultUser)
        case LOGGING_OUT: 
            return { ...state, loggingOut: true }
        default:
            return state
    }
}
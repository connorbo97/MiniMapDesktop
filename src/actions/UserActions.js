export const CHECKED_AUTH = 'CHECKED_AUTH'
export const LOAD_USER_DATA = 'LOAD_USER_DATA'
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'
export const LOGGING_OUT = 'LOGGING_OUT'

export const checkedAuth = (val) => {
    return { type: CHECKED_AUTH, val }
}


export const loadUserData = (val) => {
    return { type: LOAD_USER_DATA, val }
}


export const clearUserData = () => {
    return { type: CLEAR_USER_DATA }
}


export const loggingOut = (val) => {
    return { type: LOGGING_OUT, val }
}
